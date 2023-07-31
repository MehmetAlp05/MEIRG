import { useNavigate } from "react-router-dom";
export default function Footer(props){
    const navigate = useNavigate();

    return(
        <>
            <div className="footer" style={{color:props.color}}>
                <span>
                    © 2023 AgRe All rights reserved.
                </span>
                <span className="login" onClick={()=>navigate("/login")}>
                    staff
                </span>
            </div>
        </>
    )
}
