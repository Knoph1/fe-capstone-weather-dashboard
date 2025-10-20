export default [
  // Ignore generated files and heavy folders
  { ignores: ['.next/**', 'node_modules/**', 'public/screenshots/**'] },

  // Apply Next.js recommended rules via the flat config extends
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    extends: ['next/core-web-vitals', 'next'],
    languageOptions: {
      parserOptions: { ecmaVersion: 'latest', sourceType: 'module', ecmaFeatures: { jsx: true } },
    },
    settings: { react: { version: 'detect', jsxRuntime: 'automatic' } },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
    },
  },
]
