import { Link } from "react-router-dom"

export default function Whoweare(props){
    return(
        <>
        <div className="whoweare">
            <span className="header">Who we are ?</span>
            <span className="context" style={{color:props.color}}>Lorem ipsum dolor sit amet consectetur. Quis nec et phasellus sed venenatis quisque curabitur commodo. Habitant sociis mauris ridiculus elit et. Sit venenatis risus dictum scelerisque ac nisi eu consectetur commodo. Iaculis sem amet risus tortor vitae vel.</span>
            {props.more ? <span className="more"><Link to="/about" style={{color:props.color}}>More...</Link></span>:null}
        </div>
        </>
    )
}
