import { ReactFloatingBalloons } from "react-floating-balloons";

export default function Profile (props){
    return(
        <>
        <div style={{backgroundColor:"#F6F9F8"}} className="profilePage">
            <div className="profileMain">
                <div className="col1">
                    <span className="name">
                        {props.name}
                    </span>
                    <span className="school">
                        {props.school}
                    </span>
                    <span className="socialMedia">
                        {props.socialMedia}
                    </span>
                </div>
                <div className="col2">
                    <img src={props.img} alt="" />
                </div>
            </div>
            <div className="profileAbout">
                <span>About</span>
                <div className="context">
                {props.about}
                </div>
            </div>
            <div className="profileInterest">
                <span>Interest</span>
                <div className="context">
                {props.interest}
                </div>
            </div>
            <div className="profileRelease">
                <span>Release</span>
                <div className="container">
                    {
                        props.release.slice(0,4).map((e)=>{
                            return(
                                <div>
                                    {e.title}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
        {
            (props.uid==="KsApIi7MrLeso9V1KFqHzAfyNeX2")&&<ReactFloatingBalloons
            count={5}
            msgText="İyi ki doğdun"
            colors={["orange", "purple"]}
            popVolumeLevel={0.1}
        />
        }
        </>
    )
}