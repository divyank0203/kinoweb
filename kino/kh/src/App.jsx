import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'
import MovieList from './components/Movielist'
import { Route,
   createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    } from 'react-router-dom';

function App() {
  

  return (
    <>
    <Navbar/>
    <MovieList/>
    
    </>
  )
}

export default App
