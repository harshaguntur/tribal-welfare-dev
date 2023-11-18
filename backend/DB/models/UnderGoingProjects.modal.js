import mongoose from "mongoose";

const ImageScehma = new mongoose.Schema(
    {
   image : String 
    },

    // {
    //     collation : "ImageDetails",
    // }

);


const UnderGoingProjects = mongoose.model('UnderGoingProjects',ImageScehma);


export default UnderGoingProjects; 
