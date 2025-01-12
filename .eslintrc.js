module.exports = {
  root: true,
  extends: '@react-native', // Base React Native configuration
  env: {
    browser: true, // Browser environment (if needed)
    es2021: true, // ES2021 global variables
    'jest/globals': true, // Enable Jest globals
  },
  plugins: ['jest'], // Include Jest plugin
  overrides: [
    {
      files: ['**/*.test.js', '**/*.test.ts', '**/*.spec.js', '**/*.spec.ts'], // Target test files
      extends: ['plugin:jest/recommended'], // Use Jest recommended rules for test files
      env: {
        'jest/globals': true, // Enable Jest globals for test files
      },
    },
  ],
  rules: {
    // Add any custom rules you want
    'no-unused-vars': 'warn', // Warn for unused variables
    'no-console': 'warn', // Warn for console statements
  },
};
