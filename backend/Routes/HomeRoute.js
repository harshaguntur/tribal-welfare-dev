import express from "express";
import User from "../DB/models/user.model.js";


const HomeRouter = express.Router();

HomeRouter.get("/",(req,res)=>{
    res.send("Home page ");
})





export default HomeRouter;