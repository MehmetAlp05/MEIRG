import { useState } from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
export default function Edu(){
    const[type,setType]=useState("main")
    return(
        <> 
            <div className="edu" style={{backgroundColor:"#F6F9F8"}}>
                <Navbar background="#F6F9F8" borderBottom="black 3px solid" borderBottomElement="black 1px solid" color="#1E1A1D" user={(typeof(currentUser) !== 'undefined')&&currentUser.name} />
                {(type==="main")&&<div className="container">
                    <div className="column">
                        <h1>Communication</h1>
                        <span onClick={()=>setType("slack")}>Slack</span>
                        <span>Communication Code</span>
                    </div>
                    <div className="vl"></div>
                    <div className="column">
                        <h1>Organization</h1>
                        <span onClick={()=>setType("pm#1")}>Project Management #1</span>
                    </div>
                    <div className="vl"></div>
                    <div className="column">
                        <h1>Python</h1>
                        <span>Soon</span>
                    </div>
                </div>}
                {(type==="slack")&&<div className="context">
                    <div className="menu">
                        <button className="editButton" onClick={()=>setType("main")}><h1>{"<"}</h1></button>
                        <h1>Slack</h1>
                    </div>
                    <iframe src="https://drive.google.com/file/d/1CX4tSsRN-v4Skyj-gQUHbsc1UHcxwOvE/preview" width="640" height="480" allow="autoplay"></iframe> 
                </div>}
                {(type==="pm#1")&&<div className="context">
                    <div className="menu">
                        <button className="editButton" onClick={()=>setType("main")}><h1>{"<"}</h1></button>
                        <h1>Project Management</h1>
                    </div>
                    <iframe src="https://drive.google.com/file/d/1exEnPwOCph161CkJaWkVP41mQb_gElPc/preview" width="640" height="480" allow="autoplay"></iframe>
                </div>}
                <Footer/>
            </div>
        </>
    )
}