export default function ReleaseInfo(props){
    return(
        <>
            <div className="releaseInfo" style={{backgroundColor:props.color,margin:props.margin}}>
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