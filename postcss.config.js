// PostCSS Configuration File
// PostCSS processes CSS through a series of plugins
// This is the bridge between Tailwind's @tailwind directives and final CSS

module.exports = {
  plugins: {
    // TAILWIND CSS PLUGIN: Processes @tailwind directives
    // Transforms @tailwind base, components, utilities into actual CSS
    // Uses tailwind.config.js to determine which classes to generate
    '@tailwindcss/postcss': {},

    // AUTOPREFIXER: Adds vendor prefixes for browser compatibility
    // Automatically adds -webkit-, -moz-, -ms- prefixes where needed
    // Uses browserslist to determine which prefixes are required
    autoprefixer: {},

    // Other useful PostCSS plugins you might add:
    // 'cssnano': {},                    // Minify CSS for production
    // 'postcss-nested': {},            // Support for nested CSS rules
    // 'postcss-custom-properties': {}, // CSS custom properties fallbacks
  },
}