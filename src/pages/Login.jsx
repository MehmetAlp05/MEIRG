import React, {useState} from 'react';
import {  signInWithEmailAndPassword,signOut   } from 'firebase/auth';
import { NavLink, useNavigate } from 'react-router-dom'
import {auth} from "../../.firebase/firebaseConfig" 
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
     
  const onLogin = (e) => {
      e.preventDefault();
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/")
          console.log(user);
      })
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage)
      });
     
  }
  const handleLogout = () => {               
    signOut(auth).then(() => {
    // Sign-out successful.
        navigate("/");
        console.log("Signed out successfully")
          window.location.reload(false);
    }).catch((error) => {
    // An error happened.
    });
}

  return (
    <div className="releaseUpload login">
      <div className='block'> 
        <input
            id="email-address"
            name="email"
            type="email"                                    
            required                                                                                
            placeholder="Email address"
            onChange={(e)=>setEmail(e.target.value)}
        />

      </div>
      <div className='block'> 
        <input
            id="password"
            name="password"
            type="password"                                    
            required                                                                                
            placeholder="Password"
            onChange={(e)=>setPassword(e.target.value)}
        />

      </div>
      <div className="backforth">
        <div className="miniBlock" onClick={onLogin}>
            Login
          </div>
          <div className="miniBlock" onClick={handleLogout}>
              logOut
          </div>
        </div>

    </div>
  );
};

export default Login;