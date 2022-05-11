# [Tauri](https://www.tauri.studio/) + [Solid](https://solidjs.com) + [Tailwind CSS](https://tailwindcss.com/) + [TypeScript](https://www.typescriptlang.org/) + [Vite](https://vitejs.dev/) Starter

A starter template for [Tauri](https://www.tauri.studio/) + [Solid](https://solidjs.com) App that comes preconfigured with [Vite](https://vitejs.dev/),
[TypeScript](https://www.typescriptlang.org/), [Tailwind CSS](https://tailwindcss.com/), [ESLint](https://eslint.org/), [Prettier](https://prettier.io/) and HMR.

## Features

- 🤩 [Tauri](https://www.tauri.studio/) - Build smaller, faster, and more secure desktop and mobile applications with a web frontend.

- ⚡️ [Solid](https://solidjs.com) & [Vite](https://github.com/vitejs/vite) - Easy win in performance.

- 🎨 [Tailwind CSS](https://github.com/windicss/windicss) - A utility-first CSS framework for rapid UI development.

- 💪 [TypeScript](https://www.typescriptlang.org/) - it's JavaScript with syntax for types so it have superpowers 🚀

- 👌 [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/) - ESLint find problems in your code and Prettier format your code for an easy life.

<br>

## Getting started

### GitHub Template

[Create a repo from this template on GitHub](https://github.com/AR10Dev/solid-tailwind-ts-vite/generate)

### Clone to local

If you prefer to do it manually with the cleaner git history

```bash
npx degit AR10Dev/tauri-solid-tailwind-ts-vite my-app
cd my-app
npm install # or pnpm install or yarn install
```

### Note
For use Tauri you need to Setup your environment following this [guide](https://tauri.studio/en/docs/getting-started/intro#setting-up-your-environment)

## Checklist

When you use this template, follow the checklist to update your info properly

- [ ] Rename `name`, `version` and `author` field in `package.json`
- [ ] Rename `name`, `version`, `description`, `authors` and `repository` field in `src-tauri/Cargo.toml`
- [ ] Change the author name in `LICENSE`
- [ ] Remove the `renovate.json5` which contains the renovate config
- [ ] Clean up the READMEs
- [ ] Optional: Remove the `.github` folder which contains the github action for cross compilation
- [ ] Enjoy 😉

## Usage

### Development

```bash
npm run tauri dev # or pnpm tauri dev or yarn tauri dev
```

Runs the app in the development mode.<br>

The first time you run this command, it will take several minutes for the Rust package manager to download and build all the required packages. Since they are cached, subsequent builds will be much faster, as only your code will need rebuilding.<br>

If you make edits to the page in the webview should update automatically just like a browser will reload.<br>
When you make edits to the Rust files, they will be rebuilt automatically and your app will restart.<br>

### Build

```bash
npm run tauri build # or pnpm tauri build or yarn tauri build
```

Builds Solid to the `dist` folder and after will embed it into a single binary with your Rust code.<br>
The binary itself will be located in `src-tauri/target/release/[app name]`, and installers will be located in `src-tauri/target/release/bundle/`<br>

Like the `tauri dev` command, the first time you run this, it will take some time to collect the Rust crates and build everything - but on subsequent runs it will only need to rebuild your code, which is much quicker.<br>

It correctly bundles Solid in production mode and optimizes the binary for the best performance.<br>

🎉 Congratulations, your app is ready to be release!

## Custom App Icon

```bash
npm run tauri icon [path to the .png icon file] # or pnpm tauri icon [path to the .png icon file] or yarn tauri icon [path to the .png icon file]
```

Generates your custom app icon.<br>
Your new apps will be located in `src-tauri/icons/` and remeber to update the `icon` field in `src-tauri/tauri.conf.json` with all your new icon path name.<br>
For more info follow this [guide](https://tauri.studio/docs/guides/icons/).<br>

## Customize the tauri.conf.json

To modify and personalize your app, you need to modify `src-tauri/tauri.conf.json` by following this [guide](https://tauri.studio/docs/api/config/)
