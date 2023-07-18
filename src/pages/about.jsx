import Footer from "../components/footer"
import Navbar from "../components/navbar"
import OurTeam from "../components/ourTeam"
import Whoweare from "../components/whoweare"
export default function About(){
    return(
        <>
            <div style={{background:"#1D2859"}}>
                <Navbar background="#1D2859" borderBottom="#F86A4D 3px solid" borderBottomElement="#F86A4D 1px solid" color="#F86A4D" headerBackground=""/>
                <Whoweare more={false} color="#FBFDFF"/>
                <OurTeam/>
                <Footer color="#FBFDFF"/>
            </div>
        </>
    )
}
