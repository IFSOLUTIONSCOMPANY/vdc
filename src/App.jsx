import React, { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Navbar from './components/Nav/Navbar'
import About from './components/About/About'
import Events from './components/Events/Events'
import Journey from './components/Journey/Journey'
import Footer from './components/Footer/Footer'
import AOS from 'aos'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000
    })
  })
  return (
    <BrowserRouter>
      <Navbar />
      <About />
      <Events />
      <Journey />
      <Footer />
    </BrowserRouter>
  )
}

export default App
