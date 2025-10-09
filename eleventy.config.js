// Eleventy Configuration File
// This file configures how Eleventy builds your static site
const mathjaxPlugin = require("eleventy-plugin-mathjax");
const { mathjax } = require("mathjax-full/js/mathjax.js");
const { TeX } = require("mathjax-full/js/input/tex.js");
const { CHTML } = require("mathjax-full/js/output/chtml.js");
const { liteAdaptor } = require("mathjax-full/js/adaptors/liteAdaptor.js");
const { RegisterHTMLHandler } = require("mathjax-full/js/handlers/html.js");
const { AssistiveMmlHandler } = require("mathjax-full/js/a11y/assistive-mml.js");
const { AllPackages } = require("mathjax-full/js/input/tex/AllPackages.js");

module.exports = function(eleventyConfig) {
  eleventyConfig.ignores.add("src/**/.*.md");
  eleventyConfig.ignores.add("src/**/.*.html");

  // Date filter for ISO format (machine-readable)
  eleventyConfig.addFilter("dateISO", (dateObj) => {
    return new Date(dateObj).toISOString();
  });
  
  // Date filter for human-readable format
  eleventyConfig.addFilter("dateReadable", (dateObj) => {
    return new Date(dateObj).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long", 
      day: "numeric"
    });
  });

  // MATHJAX: Custom selective transform
  // Only process files that contain math notation ($ or \( patterns)
  // This avoids errors with HTML-heavy pages like index.md
  const texOptions = {
    packages: { '[+]': ['ams', 'boldsymbol'] },
    processEnvironments: true,
    processRefs: true,
    inlineMath: [["$", "$"], ["\\(", "\\)"]],
  };

  const InputJax = new TeX(texOptions);
  const OutputJax = new CHTML({});
  const adaptor = liteAdaptor({});
  AssistiveMmlHandler(RegisterHTMLHandler(adaptor));

  eleventyConfig.addTransform("mathjax", function (content, outputPath) {
    if (!(outputPath && outputPath.endsWith(".html"))) {
      return content;
    }

    // Check if content likely contains math notation
    const hasMath = content.includes('$') || content.includes('\\(') || content.includes('\\[');
    if (!hasMath) {
      return content;
    }

    try {
      const html = mathjax.document(content, { InputJax, OutputJax });
      html.render();

      // Clean up if no math was found
      if (isEmpty(html.math)) {
        adaptor.remove(html.outputJax.chtmlStyles);
      }

      return adaptor.doctype(html.document) + "\n" +
             adaptor.outerHTML(adaptor.root(html.document)) + "\n";
    } catch (err) {
      console.warn(`MathJax processing failed for ${outputPath}:`, err.message);
      return content; // Return original content if processing fails
    }
  });

  // IMPORTANT: Copy images to output directory
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/projects");
  
  // Also copy any PDFs, if you have CV, etc.
  eleventyConfig.addPassthroughCopy("src/*.pdf");

  function isEmpty(iterable) {
    for (const elem of iterable) {
      return false;
    }
    return true;
  }

  // PASSTHROUGH COPY: Copy files directly without processing
  // Copy CSS files from src/css to output directory
  // This ensures our compiled CSS files are available in the final site
  eleventyConfig.addPassthroughCopy("src/css");

  // Copy static assets (images, fonts, etc.) to output
  // Create src/assets folder for images, fonts, icons, etc.
  eleventyConfig.addPassthroughCopy("src/assets");

  // WATCH TARGETS: Tell Eleventy to watch additional files for changes
  // Watch CSS source files - when they change, trigger a rebuild
  // This works with the CSS compilation process in package.json
  eleventyConfig.addWatchTarget("src/css/");

  // DIRECTORY CONFIGURATION
  return {
    dir: {
      input: "src",        // Source files directory
      output: "_site"      // Built site output directory
    }
  };
};