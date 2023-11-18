import { useEffect, useState } from "react"
import axios from "axios";

function UnderGoingProjects()  {
  
  const [allImages,setAllImages] = useState();

  const getImages =  async ()=>{
    const res = await axios.get("/api/GetUnderGoingProjects");
    console.log(res);
    setAllImages(res.data.data);
    console.log(allImages);
  }
  
  const path = "http://localhost:3000/UnderGoingProjects/";    
  
  useEffect(()=>{
    getImages();
  },[])         

  
   
  
  
  
  
  return (

    <div>
    
   
    <h1>hello world </h1>
    
    
    </div>
    

  )
}
export default UnderGoingProjects