import { useState } from 'react'
import './App.css'
import './mobile.css'
import Home from './pages/home';
import { Routes, Route } from 'react-router-dom';
import About from './pages/about';
import ReleasePage from './pages/releasePage';
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/release" element={<ReleasePage/>} />
      </Routes>
    </>
  )
}

export default App
