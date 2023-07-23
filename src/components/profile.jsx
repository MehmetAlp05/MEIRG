
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
                    <img src="" alt="" />
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

                </div>
            </div>
        </div>
        </>
    )
}