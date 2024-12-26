import Link from '@components/Link'
import type { Component } from 'solid-js'

const Main: Component = () => {
  return (
    <main class="text-center text-2xl text-gray-800">
      <p class="mb-4">
        This is a <Link href="https://www.tauri.app/">Tauri</Link> +{' '}
        <Link href="https://www.solidjs.com/">Solid</Link> +{' '}
        <Link href="https://tailwindcss.com/">Tailwind</Link> +{' '}
        <Link href="https://www.typescriptlang.org/">Typescript</Link> App!
      </p>
    </main>
  )
}

export default Main
