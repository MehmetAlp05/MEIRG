export default function OurTeam(props){
    return(
        <>
            <div className="ourTeam" >
                <span className="header">
                    Our Team
                </span>
                <div className="container">
                    {
                        props.users.map((e)=>{
                            return(
                                <TeamMember name={e.name} img={e.picture} function={props.function} id={e.id}/>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
function TeamMember(props){
    return(
        <>
            <div className="teamMember" onClick={props.function} id={props.id}>
                <img src={props.img} alt="" />
                <span className="name">{props.name}</span>
            </div>
        </>
    )
}