export default [
  {
    files: ['src/**/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      'eqeqeq': 'error',
      'no-var': 'error',
      'prefer-const': 'warn',
    },
  },
];