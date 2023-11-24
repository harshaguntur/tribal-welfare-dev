import express from "express";
import multer from "multer";
import Image from "../DB/models/image.model.js";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  },
});

const upload = multer({ storage: storage });

const UploadImgRouter = express.Router();

UploadImgRouter.post("", upload.single("image"), async (req, res) => {
  console.log(req.body);
  const imageName = req.file.filename;
  console.log(imageName);
  try {
    await Image.create({ image: imageName });
  } catch (error) {
    console.log(error);
  }
});

export default UploadImgRouter;
