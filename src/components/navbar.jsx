import { Link } from "react-router-dom";
import About from "../pages/about";

export default function Navbar(props){
    return(
        <>
            <div className='navbar' style={{background:props.background,borderBottom:props.borderBottom}}>
                <span className='header' style={{background:props.headerBackground,color:props.color}}>
                    <Link to="/" style={{color:props.color}}>AgRe</Link>
                </span>
                <div className="menu" style={{color:props.color}}>
                    <div className="element" style={{borderBottom:props.borderBottomElement}}><Link to="/about" style={{color:props.color}}>About Us</Link></div>
                    <div className="element" style={{borderBottom:props.borderBottomElement}}><Link to="/release" style={{color:props.color}}>Release</Link></div>
                    <div className="element" style={{borderBottom:props.borderBottomElement}}>News</div>
                </div>
            </div>
        </>
    )
}