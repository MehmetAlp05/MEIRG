export default function Footer(props){
    return(
        <>
            <div className="footer" style={{color:props.color}}>
                <span>
                    © 2023 AgRe All rights reserved.
                </span>
                <span className="login">
                    staff
                </span>
            </div>
        </>
    )
}
