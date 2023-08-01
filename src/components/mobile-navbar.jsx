import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar";
export default function MobileNavbar({isMenu,onChange,img}){

    return(
        <div className={`mobile-navbar mobile ${isMenu && "open"}`}>
            <div
                className=""
                onClick={() => onChange(false)}
            >
                <img src={img} style={{position:"absolute",width:"4rem",height:"4rem",top:"3vh",right:"3vw"}}></img>
            </div>
            <Navbar background="#F6F9F8" borderBottom="black 3px solid" borderBottomElement="black 1px solid" color="#1E1A1D" user={(typeof(currentUser) !== 'undefined')&&currentUser.name} />
            <div className="nav"><Link to="/">Home</Link></div>
            <div className="nav"><Link to="/about">About Us</Link></div>
            <div className="nav"><Link to="/release">Release</Link></div>
            <div className="nav"><Link to="/news">News</Link></div>
        </div>
    )
}