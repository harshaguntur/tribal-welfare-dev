import Approch from "./Approch"
import Home1 from "./Home1"
import "../css/HomeFinal.css"
import About from "./About"
import Navbar from "./Navbar"




const HomeFinal = () => {
  return (

    <>  


    

    
    <div className="outerdiv">
{/* 
    <input type="button" onClick="document.getElementById('middle').scrollIntoView()" placeholder="hello"/> */}

    <Navbar/>

    <Home1 />
   
    <Approch/>

    <About/>

    </div>

    </>


  )
}
export default HomeFinal