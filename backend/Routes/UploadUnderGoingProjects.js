import express from "express";
import UnderGoingDB from "../DB/models/UnderGoingProjects.modal.js";
import multer from "multer";
const UnderGoingProjectsRouter = express.Router();



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads/UnderGoingProjects/");
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now();
      cb(null, uniqueSuffix + file.originalname);
    },  
  });


const upload = multer({ storage: storage });



UnderGoingProjectsRouter.post("",upload.single("image"),async(req,res)=>{
    
    const imageName = req.file.filename;
    console.log(imageName);
    try {
      await UnderGoingDB.create({ image: imageName });
    } catch (error) {
      console.log(error);
    }
});

export default UnderGoingProjectsRouter;