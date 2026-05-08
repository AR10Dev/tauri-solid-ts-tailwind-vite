import type { Component } from 'solid-js'
import Link from './Link'

const Footer: Component = () => {
  return (
    <footer class="mt-8 text-lg font-medium text-gray-600">
      Made with ❤️ by <Link href="https://avaabrazzaq.com">Avaab Razzaq</Link>
    </footer>
  )
}

export default Footer
