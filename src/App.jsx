import { useState } from 'react'
import './App.css'
import './mobile.css'
import research1 from './assets/research1.png'
import Navbar from './components/navbar'
import Welcome from './components/welcome'
import Whoweare from './components/whoweare'
import Release from './components/release'
import ReleaseCard from './components/releaseCard'
import Footer from './components/footer'

function App() {

  return (
    <>
      <Navbar/>
      <Welcome/>
      <Whoweare/>
      <Release/>
      <Footer/>
    </>
  )
}

export default App
