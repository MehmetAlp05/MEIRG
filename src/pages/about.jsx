import { useState,useEffect,useRef } from "react"
import Footer from "../components/footer"
import Navbar from "../components/navbar"
import OurTeam from "../components/ourTeam"
import Profile from "../components/profile"
import Whoweare from "../components/whoweare"
import hamburgerOrange from"../assets/hamburgerOrange.svg"
import MobileNavbar from "../components/mobile-navbar"
import { collection, getDocs } from "firebase/firestore";
import {db} from '../../.firebase/firebaseConfig';

export default function About(){

    const [users,setUsers]=useState([]);
    const [release,setRelease]=useState([]);

    
    const eventsCollectionRef=collection(db,"users");
    useEffect(()=>{
        const getUsers=async()=>{
        const data=await getDocs(eventsCollectionRef)
        setUsers(data.docs.map(( doc) => ({ ...doc.data(), id: doc.id })));
    } 
    getUsers()
    },[])
    const releaseCollectionRef=collection(db,"release");
    useEffect(()=>{
        const getUsers=async()=>{
        const data=await getDocs(releaseCollectionRef)
        setRelease(data.docs.map(( doc) => ({ ...doc.data(), id: doc.id })));
    } 
    getUsers()
    },[])

    const [isMenu,setMenu]=useState(false)
    const [isProfile,setProfile]=useState(false)
    const currentUser = useRef({});
    const currentRelease = useRef({});
    function findMyObject(b){
        let a = users.find(a=>a.id===b)
        console.log(a)
        return a
    }
    function findId (e){
        isProfile?setProfile(false):setProfile(true);
        currentUser.current=findMyObject(e.currentTarget.id);
        currentRelease.current=release.filter(obj=>currentUser.current.release.includes(obj.id))    

    };

    return(
        <>
            <div style={{background:"#1D2859"}}>
                <div className='mobile' onClick={() => setMenu(true)} style={{position:"absolute",width:"4rem",height:"4rem",top:"3vh",right:"3vw"}}><img style={{height:"100%",width:"100%"}}src={hamburgerOrange}></img></div>    
                <Navbar background="#1D2859" borderBottom="#F86A4D 3px solid" borderBottomElement="#F86A4D 1px solid" color="#F86A4D" headerBackground=""/>
                {!(isProfile)&&<><Whoweare more={false} color="#FBFDFF"/>
                <OurTeam users={users} function={findId}/>
                <Footer color="#FBFDFF"/>
                <MobileNavbar img={hamburgerOrange} isMenu={isMenu} onChange={setMenu} background="#1D2859"/></>}
                {
                    (isProfile)&&<Profile name={currentUser.current.name} school={currentUser.current.university} release={currentRelease.current} img={currentUser.current.picture} uid={currentUser.current.uid}/>
                }

            </div>
        </>
    )
}
