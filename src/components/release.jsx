import { Link } from "react-router-dom";
import ReleaseCard from "./releaseCard";

export default function Release(props){
    return(
        <>
            <div className="release">
                <span className="header">Recent Release</span>
                <div className="container">
                <ReleaseCard name="Alp Demircioğlu" experimentName="Experiment1" experimentContext="a"/>
                <ReleaseCard name="Alp Demircioğlu" experimentName="Experiment1" experimentContext="a"/>
                <ReleaseCard name="Alp Demircioğlu" experimentName="Experiment1" experimentContext="a"/>
                <ReleaseCard name="Alp Demircioğlu" experimentName="Experiment1" experimentContext="a"/>
                <ReleaseCard name="Alp Demircioğlu" experimentName="Experiment1" experimentContext="a"/>
                <ReleaseCard name="Alp Demircioğlu" experimentName="Experiment1" experimentContext="a"/>
                <span className="more"><Link to="/release" style={{color:props.color}}>More...</Link></span>

                </div>
            </div>
        </>
    )
}
