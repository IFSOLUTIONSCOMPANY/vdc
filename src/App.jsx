import { useState } from 'react'
import React, { useEffect } from 'react';
import './App.css'
import Navbar from './components/Nav/Navbar'
import About from './components/About/About'
import AOS from 'aos'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000
    })
  })
  return (
    <>
      <Navbar />
      <About />
    </>
  )
}

export default App
