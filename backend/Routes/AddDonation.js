import express from "express";
import AddDonationController from "../controllers/AddDonationController.js";
import multer from "multer";


const AddDonationRouter = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads/DonationProblems/");
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now();
      cb(null, uniqueSuffix + file.originalname);
    },  
  });


const upload = multer({ storage: storage });

AddDonationRouter.post("",upload.single("image"),AddDonationController);

export default AddDonationRouter;