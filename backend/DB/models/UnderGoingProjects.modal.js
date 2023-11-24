import mongoose from "mongoose";

const ImageScehma = new mongoose.Schema(
    {
   image : String 
    },

    // {
    //     collation : "ImageDetails",
    // }

);


const UnderGoingDB = mongoose.model('UnderGoingProjects',ImageScehma);


export default UnderGoingDB; 
