import { useEffect, useState } from "react";
import "../css/Donation.css";
import axios from "axios";

const Donation = () => {

   const [data , SetData] = useState([]);
   


   const getData  = async ()=>{

    const res  = await axios.get("/api/GetDonationProblems");
    const newData = res.data;
    SetData(newData);


   };

   console.log(data);

   useEffect(()=>{
      getData();
   },[]);


  const path = "http://localhost:3000/DonationProblems/";   




  return (
    <div className="Donation-outer-div">


      <div className="Donation-heading">
        <div className="Donation-heading-sub-div">
          <h1>GIVING opens the way for RECEIVING</h1>
        </div>
      </div>

      <div className="donation-container-div">
        {
          data.map((ele)=>{
           return (
            <div key={ele._id} className="problem-container">
             
              <div className="problem-img-container">
                <img src={path + ele.image}  className="problem-image-div" alt="" />
              </div>

              <div className="problem-matter-sub-div">

              <div className="problem-matter-sub-sub-div">

              <h3>{ele.ProblemName}</h3>
              <p>{ele.ProblemDescription}</p>
              <button >DONATE</button>

              </div>

              </div>

            </div>
           )
          })
        }


      </div>




    </div>
  );
};
export default Donation;
