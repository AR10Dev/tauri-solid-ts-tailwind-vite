import type { Component } from 'solid-js'

const Footer: Component = () => {
  return (
    <footer class="mt-8 text-gray-600">
      &copy; {new Date().getFullYear()} My App. All rights reserved.
    </footer>
  )
}

export default Footer
