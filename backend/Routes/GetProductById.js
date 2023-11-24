import express from "express";
import GetProductById from "../controllers/GetProductById.js";


const GetProductByIdRouter = express.Router();



GetProductByIdRouter.post("",GetProductById);



                              
export default GetProductByIdRouter;