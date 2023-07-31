import { Link } from "react-router-dom"
import Footer from "../components/footer"
import Navbar from "../components/navbar"
export default function ReleasePage(){
    return(
        <>
            <div style={{background:"#1D2859"}} className="releasePage">
                <Navbar background="#1D2859" borderBottom="#754FE8 3px solid" borderBottomElement="#754FE8 1px solid" color="#754FE8" headerBackground=""/>
                <div className="container">
                    <ReleaseInfo title="experiment1" explanation="kmaskdmakldmklad"/>
                    <ReleaseInfo title="experiment1" explanation="kmaskdmakldmklad"/>
                </div>
                <Footer color="#FBFDFF"/>
            </div>
        </>
    )
}
function ReleaseInfo(props){
    return(
        <>
            <div className="releaseInfo">
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