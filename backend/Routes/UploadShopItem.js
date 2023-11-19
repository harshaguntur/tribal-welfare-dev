import express from "express";
import ShopItemDB from "../DB/models/shop.model.js";
import multer from "multer";

const ShopItemRouter = express.Router();



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads/ShopItems/");
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now();
      cb(null, uniqueSuffix + file.originalname);
    },  
  });


const upload = multer({ storage: storage });



ShopItemRouter.post("",upload.single("image"),async(req,res)=>{
                        

   const Img = req.file.filename;
   const Name = req.body.Name;

   const Price = req.body.Price;
   
   const Description = req.body.Description;

  try {
    await ShopItemDB.create({ image : Img ,ProductName : Name ,ProductPrice:Price,ProductDescription:Description});
  } catch (error) {
    console.log(error);
  }
    
   
});

export default ShopItemRouter;