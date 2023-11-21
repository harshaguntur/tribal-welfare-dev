import Approch from "./Approch"
import Home1 from "./Home1"
import "../css/HomeFinal.css"
import About from "./About"




const HomeFinal = () => {
  return (

    <>   
    

    {/* <Home1/>        
    <br /> */}
    {/* <Approch/> */}
    <div className="outerdiv">


   <div className="blue">
      <Home1/>
   </div>




   <div className="red">
    <Approch/>
   </div>


   <div className="green">

    <About/>

   </div>

    </div>

    </>


  )
}
export default HomeFinal