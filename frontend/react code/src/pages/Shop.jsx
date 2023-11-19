import "../css/shop.css"


import { useEffect, useState } from "react";
import axios from "axios";


const Shop = () => {
 
  const [data,setData] = useState([]);
  
  const getData = async ()=>{
      const res = await axios.get("/api/GetShopItems");
      const NewData = res.data;
      setData(NewData);
  };

  useEffect(()=>{
    getData();
  },[]);
 
 
 const path = "http://localhost:3000/ShopItems/"
 
 
  return (

    <>
    <div className="hi">

    <h1>Shop</h1>
    </div>

    <div className="allProducts">



    {
      data.map((ele,)=>{
         return <div className="Product-div" key={ele._id}>
            <img src={path + ele.image} alt="harsha" className="Product-img"/>
            <h4 className="Product-Name">{ele.ProductName}</h4>
            <h5 className="Product-Price">₹{ele.ProductPrice}</h5>
            <button className="Buy-btn">Buy Now</button>
            <button className="Buy-btn"  >Add To cart</button>
         </div>
      })
    }
      </div>
    
    </>
  )
}
export default Shop