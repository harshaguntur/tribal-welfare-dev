import { useEffect, useState } from "react"
import axios from "axios";

const UnderGoingProjects = () => {
 
  const [images,setImages] = useState([]);

  const getImages = async ()=>{
    const res = await axios.get("/api/GetUnderGoingProjects");

    const data = res.data.data;
    setImages(data);
  }

  const path = "http://localhost:3000/UnderGoingProjects/";

  useEffect(()=>{

    getImages();

  },[])


 
  return (


    <>

    <div>UnderGoingProjects</div>

    {
      images.map((ele)=>{
        return <img key={ele._id} src={path+ele.image} alt="harsha" style={{width:"200px",height:"200px"}} />
      })
    }

      </>
  )
}
export default UnderGoingProjects