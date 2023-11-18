import mongoose from "mongoose";

const ImageScehma = new mongoose.Schema(
    {
   image : String 
    },

    // {
    //     collation : "ImageDetails",
    // }

);


const Image = mongoose.model('ImageDetails',ImageScehma);

export default Image; 
