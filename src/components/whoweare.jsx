import { Link } from "react-router-dom"

export default function Whoweare(props){
    return(
        <>
        <div className="whoweare">
            <span className="header">Who we are ?</span>
            <span className="context" style={{color:props.color}}> </span>
            {props.more ? <span className="more"><Link to="/about" style={{color:props.color}}>More...</Link></span>:null}
        </div>
        </>
    )
}
