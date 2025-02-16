/** @type {import("prettier").Config} */

import fs from 'fs'
import path from 'path'

const packageJsonPath = path.resolve(process.cwd(), 'package.json')
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'))
const typescriptVersion = packageJson.devDependencies.typescript || packageJson.dependencies.typescript

export default {
    arrowParens: 'avoid',
    singleQuote: true,
    printWidth: 90,
    semi: false,
    trailingComma: 'none',
    plugins: ['prettier-plugin-tailwindcss', '@ianvs/prettier-plugin-sort-imports'],
    // @ianvs/prettier-plugin-sort-imports plugin's options
    // https://github.com/IanVS/prettier-plugin-sort-imports#options
    importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
    importOrderTypeScriptVersion: typescriptVersion,
};