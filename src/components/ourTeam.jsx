export default function OurTeam(props){
    return(
        <>
            <div className="ourTeam" >
                <span className="header">
                    Our Team
                </span>
                <div className="container">
                    <TeamMember/>
                    <TeamMember/>
                    <TeamMember/>
                    <TeamMember/>
                    <TeamMember/>
                    <TeamMember/>
                    <TeamMember/>
                    <TeamMember/>
                    <TeamMember/>
                </div>
            </div>
        </>
    )
}
function TeamMember(){
    return(
        <>
            <div className="teamMember">
                <img src="" alt="" />
                <span className="name">Mehmet Alp Demircioğlu </span>
            </div>
        </>
    )
}