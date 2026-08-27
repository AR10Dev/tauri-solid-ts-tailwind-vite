import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import type { Config } from 'prettier'

const packageJsonPath = path.resolve(process.cwd(), 'package.json')
let packageJson: {
  devDependencies?: { typescript?: string }
  dependencies?: { typescript?: string }
}

try {
  packageJson = JSON.parse(
    fs.readFileSync(packageJsonPath, 'utf-8')
  ) as typeof packageJson
} catch (error) {
  throw new Error(`Unable to read ${packageJsonPath}`, { cause: error })
}

const typescriptVersion =
  packageJson.devDependencies?.typescript || packageJson.dependencies?.typescript

const config: Config = {
  arrowParens: 'avoid',
  singleQuote: true,
  printWidth: 90,
  semi: false,
  trailingComma: 'none',
  plugins: ['prettier-plugin-tailwindcss', '@ianvs/prettier-plugin-sort-imports'],
  // @ianvs/prettier-plugin-sort-imports plugin's options
  // https://github.com/IanVS/prettier-plugin-sort-imports#options
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  importOrderTypeScriptVersion: typescriptVersion
}

export default config
