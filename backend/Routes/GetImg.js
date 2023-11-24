import express from "express";
import Image from "../DB/models/image.model.js";



const getImgRouter = express.Router();


getImgRouter.get("",async (req,res)=>{

    const data = await Image.find();
    
    res.send(data);


});


export default getImgRouter;