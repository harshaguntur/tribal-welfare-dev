import express from "express";
import User from "../DB/models/user.model.js";


const router = express.Router();

router.get("/",(req,res)=>{
    res.send("Home page ");
})





export default router;