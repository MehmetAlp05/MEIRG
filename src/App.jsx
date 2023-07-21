import { useState ,useContext} from 'react'
import './App.css'
import './mobile.css'
import Home from './pages/home';
import { Routes, Route, Navigate } from 'react-router-dom';
import About from './pages/about';
import ReleasePage from './pages/releasePage';
import Login from './pages/Login';
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/release" element={<ReleasePage/>}/>
        <Route path="login" element={<Login />} />

      </Routes>
    </>
  )
}

export default App
