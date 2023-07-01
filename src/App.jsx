import { useState } from 'react'
import './App.css'
import './mobile.css'
import research1 from './assets/research1.png'

function App() {

  return (
    <>
      <div className='navbar'>
        <span className='header'>
          Innovation Research Group
        </span>
        <button className='login'>log in</button>
      </div>
      <div className='context'>
        <h1>Who we are?</h1>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
      </div>
      <div className="context dark">
        <h1>Latest Researchs</h1>
        <div className='research-group'>
          <div className='research1 hover'>a</div>
          <div className='research2 hover'>a</div>
          <div className='research3 hover'>a</div>
          <div className='research4 hover'>a</div>
          <div className='research5 hover'>a</div>
          <div className='research6 hover'>a</div>
      </div>
        <div className='center'>
          <button>more researchs</button>
        </div>
      </div>
      <div className="context"></div>
      <div className="footer">
      © 2023 Innovation Research Group All rights reserved.
      </div>
    </>
  )
}

export default App
