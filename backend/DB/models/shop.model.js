import mongoose from "mongoose";





const ProductScehma = new mongoose.Schema(
   {

       image : {
           type: String,
                  required : true,

        },
        ProductName : {
            type : String,
        required : true,

        },
        ProductPrice : {
            type : Number,
        required : true,

        },
        ProductDescription : {
            type : String,
        required : true,

        }



    // {
        //     collation : "ImageDetails",
        // }
        
    }
);


const ShopItemDB = mongoose.model('ShopItems',ProductScehma);


export default ShopItemDB; 
