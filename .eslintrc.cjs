/* eslint-env node */
// Docs: https://eslint.org/docs/user-guide/configuring
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:prettier/recommended',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  env: {
    browser: true,
    es2022: true
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    "prettier/prettier": "error",
    "@typescript-eslint/indent": ["error", 2],
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-explicit-any": "error"
  },
  ignorePatterns: ['node_modules'],
  root: true
}