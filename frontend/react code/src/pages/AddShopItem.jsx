import { useState } from "react"
import axios from "axios";

const AddShopItem = () => {
  
  const [img,setImg] = useState(); 
  const [productName , setProductName] = useState();
  const [prodcutPrice, setProductPrice] = useState();
  const [prodcutDescription, setProductDescription] = useState();

  
  const handelImgChange = (e)=>{

   setImg(e.target.files[0]);
  }
  const handelNameChange = (e)=>{

   setProductName(e.target.value);
  }
  const handelPriceChange = (e)=>{


   setProductPrice(e.target.value);
  }
  const handelDescriptionChange = (e)=>{


   setProductDescription(e.target.value);
  }
  

  const handelFormSubmit = async (e)=>{
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", img);
    formData.append("Name",productName);
    formData.append("Price",prodcutPrice);
    formData.append("Description",prodcutDescription);



    await axios.post("/api/AddShopItem", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  }





  
    return (
    <div className="outer-div">


        <form onSubmit={handelFormSubmit}>

            <input type="file" accept="image/*" onChange={handelImgChange} />
        <br />
        
        <input type="text" placeholder="Product Name" onChange={handelNameChange}/>

        <br />

        <input type="number" placeholder="Price" onChange={handelPriceChange} />

        <br />

        <textarea name="" placeholder="Enter Product description" id="" cols="30" rows="10" onChange={handelDescriptionChange} ></textarea>
      <br />
        <button type="submit">submit</button>

        </form>





    </div>
  )
}
export default AddShopItem