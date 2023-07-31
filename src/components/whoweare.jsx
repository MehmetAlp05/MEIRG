import { Link } from "react-router-dom"

export default function Whoweare(props){
    return(
        <>
        <div className="whoweare">
            <span className="header">Who we are ?</span>
            <span className="context" style={{color:props.color}}>We are an organization focused on research and tech. Our multidisciplinary team collaborates on international contests with finding new solutions. Also we aim to share our experiences with universities and communities with give back culture.</span>
            {props.more ? <span className="more"><Link to="/about" style={{color:props.color}}>More...</Link></span>:null}
        </div>
        </>
    )
}
