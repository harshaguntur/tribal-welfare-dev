import Approch from "./Approch"
import Home1 from "./Home1"
import "../css/HomeFinal.css"
import About from "./About"
import Navbar from "./Navbar"
import UnderGoingProjects from "./UnderGoingProjects"
import GetInTouch from "./GetInTouch"
import Donation from "./Donation"



const HomeFinal = () => {
  return (

    <>  


     

    
    <div className="outerdiv">


    <Navbar/>

    <Home1 />
   
    <Approch/>

    <About/>

    <div>

    <UnderGoingProjects/>
    </div>


    <Donation/>

    



    </div>

    </>


  )
}
export default HomeFinal