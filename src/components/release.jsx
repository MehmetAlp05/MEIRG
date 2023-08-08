import { Link } from "react-router-dom";
import ReleaseCard from "./releaseCard";

export default function Release(props){
    return(
        <>
            <div className="release">
                <span className="header">Recent Release</span>
                <div className="container">
                {
                    props.release.slice(0,6).map((e)=>{
                        return(
                            <ReleaseCard experimentName={e.title} experimentContext={e.description}/>
                        )
                    })
                }
                <span className="more"><Link to="/release" style={{color:props.color}}>More...</Link></span>

                </div>
            </div>
        </>
    )
}
