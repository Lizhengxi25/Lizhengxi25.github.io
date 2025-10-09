/** @type {import('tailwindcss').Config} */
// Tailwind CSS Configuration File
// This file tells Tailwind which files to scan for classes and how to generate CSS

export default {
  // CONTENT SCANNING: Tell Tailwind where to look for class names
  // Tailwind scans these files to determine which CSS to generate
  // Only classes found in these files will be included in the final CSS
  content: [
    "!./src/**/.*.html",      // Exclude .hidden.html, .draft.html, etc.
    "!./src/**/.*.md",        // Exclude .hidden.md, .draft.md, etc.
    "./src/**/*.{html,js,njk,md,liquid}",
    // Exclude hidden files (starting with dot)
  ],

  // THEME CUSTOMIZATION: Extend or override Tailwind's default design system
  theme: {
    extend: {
      // Extend default theme with custom values
      // Example customizations:
      // colors: {
      //   'brand-blue': '#1fb6ff',
      //   'brand-purple': '#7e5bef',
      // },
      // fontFamily: {
      //   'sans': ['Inter', 'system-ui', 'sans-serif'],
      // },
      // spacing: {
      //   '128': '32rem',
      // }
    },
  },

  // PLUGINS: Add additional Tailwind functionality
  plugins: [
    // Popular plugins to consider:
    // require('@tailwindcss/forms'),        // Better form styling
    // require('@tailwindcss/typography'),   // Prose styling for markdown
    // require('@tailwindcss/aspect-ratio'), // Aspect ratio utilities
  ],
}