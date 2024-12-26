import Footer from '@components/Footer'
import Header from '@components/Header'
import Main from '@components/Main'
import type { Component } from 'solid-js'

const App: Component = () => {
  return (
    <div class="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
