import Navbar from '../components/navbar'
import Welcome from '../components/welcome'
import Whoweare from '../components/whoweare'
import Release from '../components/release'
import Footer from '../components/footer'

export default function Home(){
    return(
        <>
            <div style={{background:"#F6F9F8"}}>
                <Navbar background="#F6F9F8" borderBottom="black 3px solid" borderBottomElement="black 1px solid" color="#1E1A1D" />
                <Welcome/>
                <Whoweare more={true} color="#F86A4D"/>
                <Release/>
                <Footer/>
            </div>
        </>
    )
}
