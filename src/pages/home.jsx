import Navbar from '../components/navbar'
import Welcome from '../components/welcome'
import Whoweare from '../components/whoweare'
import Release from '../components/release'
import Footer from '../components/footer'
import Login from './Login'
import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../../.firebase/firebaseConfig';
import { collection, getDocs } from "firebase/firestore";
import {db} from '../../.firebase/firebaseConfig';


export default function Home(){
    const [users,setUsers]=useState([]);

    
    const eventsCollectionRef=collection(db,"users");
    useEffect(()=>{
        const getUsers=async()=>{
        const data=await getDocs(eventsCollectionRef)
        setUsers(data.docs.map(( doc) => ({ ...doc.data(), id: doc.id })));
    } 
    getUsers()
    },[])
    
    const [uid, setUid] = useState('');
    const [currentUser,setCurrentUser]=useState({name:""});
    const findCurrentUserByUid=(uidToFind)=>{
        const user=users.find((p)=>p.uid===uidToFind)
        setCurrentUser(user)
    }
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              setUid(user.uid);
            
              // ...
              console.log("uid", uid)
            } else {
              // User is signed out
              // ...
              console.log("user is logged out")
            }

          });
    }, [])
    useEffect(()=>{
        findCurrentUserByUid(uid)
        console.log(currentUser)

    })
    
    //console.log(uid)
    //console.log(users.find(user=>user.uid===uid))
    

    return(
        <>
            <div style={{background:"#F6F9F8"}}>
                <Navbar background="#F6F9F8" borderBottom="black 3px solid" borderBottomElement="black 1px solid" color="#1E1A1D" user={(typeof(currentUser) !== 'undefined')&&currentUser.name} />
                <Welcome/>
                <Whoweare more={true} color="#F86A4D"/>
                <Release/>
                <Footer/>
            </div>
        </>
    )
}
