/** @type {import('postcss-load-config').Config} */
module.exports = {
  plugins: {
    "tailwindcss/nesting": {}, // Enables nesting like Sass (recommended)
    tailwindcss: {},
    autoprefixer: {},
  },
};
