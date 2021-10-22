import type { Component } from 'solid-js'

const App: Component = () => {
  return (
    <p class="text-4xl text-green-700 text-center py-20">
      This is a{' '}
      <a href="https://www.tauri.studio/" target="_blank">
        Tauri
      </a>{' '}
      +{' '}
      <a href="https://www.solidjs.com/" target="_blank">
        Solid
      </a>{' '}
      +{' '}
      <a href="https://tailwindcss.com/" target="_blank">
        Tailwind
      </a>{' '}
      +{' '}
      <a href="https://www.typescriptlang.org/" target="_blank">
        Typescript
      </a>{' '}
      App!
    </p>
  )
}

export default App
