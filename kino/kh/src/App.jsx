import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'
import MovieList from './components/Home'
import { createBrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  

  return (
    <>
  <Router>
    <Navbar />
    <Routes>
    
    </Routes>
  </Router>
    </>
  )
}

export default App
