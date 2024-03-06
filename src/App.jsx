import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Nav/Navbar'
import About from './components/About/About'

function App() {

  return (
    <>
      <Navbar />
      <About />
    </>
  )
}

export default App
