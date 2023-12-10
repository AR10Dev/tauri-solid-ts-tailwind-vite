/** @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig} */
module.exports = {
  arrowParens: 'avoid',
  singleQuote: true,
  printWidth: 90,
  semi: false,
  trailingComma: 'none',
  plugins: ['prettier-plugin-tailwindcss','@ianvs/prettier-plugin-sort-imports'],
  // @ianvs/prettier-plugin-sort-imports plugin's options
  // https://github.com/IanVS/prettier-plugin-sort-imports#options
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  importOrderTypeScriptVersion: '5.3.3',
}