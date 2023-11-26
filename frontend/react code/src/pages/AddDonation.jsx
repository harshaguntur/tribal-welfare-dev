import "../css/adddonation.css"
import { useState } from "react";
import axios from "axios";
const AddDonation = () => {

    const [problemName , setProblemName] = useState();
  const [problemDescription, SetProblemDescription] = useState();
  const [img,setImg] = useState(); 

  const handelImgChange = (e)=>{

    setImg(e.target.files[0]);
   }

   const handelNameChange = (e)=>{

    setProblemName(e.target.value);
   }

   const handelDescriptionChange = (e)=>{


    SetProblemDescription(e.target.value);
   }


   const handelFormSubmit = async (e)=>{
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", img);
    formData.append("Name",problemName);

    formData.append("Description",problemDescription);



    await axios.post("/api/addDonation", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  }



  return (

    <div className="add-donation-outer-div">

        <div className="add-donation-container">

            <form onSubmit={handelFormSubmit}>

            <input type="file" accept="image/*" onChange={handelImgChange} />
            <br />
        <input type="text" placeholder="Problem(region)" onChange={handelNameChange}/>
    <br />

        <textarea name="" placeholder="Problem description" id="" cols="30" rows="10" onChange={handelDescriptionChange} ></textarea>
      <br />
        <button type="submit">submit</button>


            </form>


        </div>



    </div>



  )
}
export default AddDonation