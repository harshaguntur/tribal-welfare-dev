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

      </div>

      
    </div>
  );
};
export default ProductPage;
