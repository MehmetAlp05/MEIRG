import { Link } from "react-router-dom"
import Footer from "../components/footer"
import Navbar from "../components/navbar"
import hamburgerOrange from"../assets/hamburgerPurple.svg"
import MobileNavbar from "../components/mobile-navbar"
import { useState,useEffect } from "react"
import { collection, getDocs } from "firebase/firestore";
import {db} from '../../.firebase/firebaseConfig';

export default function ReleasePage(){
    const [isMenu,setMenu]=useState(false)

    const [release,setRelease]=useState([]);

    const releaseCollectionRef=collection(db,"release");
    useEffect(()=>{
        const getUsers=async()=>{
        const data=await getDocs(releaseCollectionRef)
        setRelease(data.docs.map(( doc) => ({ ...doc.data(), id: doc.id })));
    } 
    getUsers()
    },[])
    function colorMatch(type){
        if(type==="podcast"){return"#07A640"}
        if(type==="video"){return"#A91C1C"}
        if(type==="article"){return"#754FE8"}
    }

    return(
        <>
            <div style={{background:"#1D2859"}} className="releasePage">
                <div className='mobile' onClick={() => setMenu(true)} style={{position:"absolute",width:"4rem",height:"4rem",top:"3vh",right:"3vw"}}><img style={{height:"100%",width:"100%"}}src={hamburgerOrange}></img></div>    
                <Navbar background="#1D2859" borderBottom="#754FE8 3px solid" borderBottomElement="#754FE8 1px solid" color="#754FE8" headerBackground=""/>
                <div className="container">
                    {
                        release.map((e)=>{
                            return(
                                <ReleaseInfo title={e.title} explanation={e.description} background={colorMatch(e.type)}/>
                            )
                        })
                    }
                </div>
                <Footer color="#FBFDFF"/>
                <MobileNavbar img={hamburgerOrange} isMenu={isMenu} onChange={setMenu} background="#1D2859"/>

            </div>
        </>
    )
}
function ReleaseInfo(props){
    return(
        <>
            <div className="releaseInfo" style={{backgroundColor:props.background}}>
                <div className="col1">
                    <span className="title">
                        {props.title}
                    </span>
                    <div className="context">
                        {props.explanation}
                    </div>
                </div>
                <div className="col2">
                        <img src="" alt="" />
                        <span className="more">More...</span>

                </div>
            </div>
        </>
    )
}