import { useState } from "react"
import Footer from "../components/footer"
import Navbar from "../components/navbar"
import OurTeam from "../components/ourTeam"
import Profile from "../components/profile"
import Whoweare from "../components/whoweare"
import hamburgerOrange from"../assets/hamburgerOrange.svg"
import MobileNavbar from "../components/mobile-navbar"
export default function About(){
    const [isMenu,setMenu]=useState(false)

    return(
        <>
            <div style={{background:"#1D2859"}}>
                <div className='mobile' onClick={() => setMenu(true)} style={{position:"absolute",width:"4rem",height:"4rem",top:"3vh",right:"3vw"}}><img style={{height:"100%",width:"100%"}}src={hamburgerOrange}></img></div>    
                <Navbar background="#1D2859" borderBottom="#F86A4D 3px solid" borderBottomElement="#F86A4D 1px solid" color="#F86A4D" headerBackground=""/>
                <Whoweare more={false} color="#FBFDFF"/>
                <OurTeam/>
                <Footer color="#FBFDFF"/>
                <Profile name="Mehmet Alp Demircioğlu" school="Middle East Technical University "/>
                <MobileNavbar img={hamburgerOrange} isMenu={isMenu} onChange={setMenu}/>

            </div>
        </>
    )
}
