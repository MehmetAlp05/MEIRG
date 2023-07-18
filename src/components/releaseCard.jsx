import cardImage from "../assets/Rectangle9.png"
export default function ReleaseCard(props){
    return(
        <>
            <div className="releaseCard" >
                <div className="background"></div>
                <div className="profile">
                    <img src={props.img} alt="profileImage" />
                    <span>{props.name}</span>
                </div>
                <div className="experiment">
                    {props.experimentName}
                </div>
                <div className="context">
                    {props.experimentContext}
                </div>
                <div className="more">
                    more
                </div>
            </div>
        </>
    )
}