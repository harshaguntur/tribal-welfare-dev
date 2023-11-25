import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import "../css/ProductPage.css";

const ProductPage = () => {
  const id = useParams();

  const [product, setProduct] = useState();

  const getData = async () => {
    const data = await axios.post("/api/GetProductById", { id });
    const Newdata = data.data;
    setProduct(Newdata);

  };

  // console.log(product);
  
  const path = "http://localhost:3000/ShopItems/";

  useEffect(() => {
    getData();
  }, []);

  return (


    <div className="product-page-outer-div">
      <div className="product-page-left">
        <div className="product-page-left-img-container">
          <img
            src={path + product?.image}
            alt="product Image"
            id="product-page-product-img"
          />
        </div>
      </div>



      <div className="product-page-right">



        <div className="product-page-right-upper-div">
          <h1> {product?.ProductName}</h1>
          <h5 id="Code">SKU: 0012</h5>
          <h3>₹{product?.ProductPrice}</h3>
          <h5>Quantity</h5>
          <input type="number" name="" id="" /><br></br>
          <button>Add to Cart</button>
          <button id="Buy">Buy Now</button>
        </div>



        <div className="product-page-right-lower-div">
          <h3>PRODUCT INFO</h3><br></br>
          <p>{product?.ProductDescription}</p>
        </div>




      </div>


    </div>
  );
};
export default ProductPage;
