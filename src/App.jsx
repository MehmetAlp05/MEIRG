import './App.css'
import './App-mobile.css'
import Home from './pages/home';
import { Routes, Route, Navigate } from 'react-router-dom';
import About from './pages/about';
import ReleasePage from './pages/releasePage';
import Login from './pages/Login';
import ProfilePage from './pages/profile';
import ReleaseUpload from './pages/releaseUpload';
import Cake from './components/cake';



function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/release" element={<ReleasePage/>}/>
        <Route path="login" element={<Login />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/releaseupload" element={<ReleaseUpload/>} />
        <Route path="/birthday" element={<Cake/>} />
        
      </Routes>
    </>
  )
}

export default App
