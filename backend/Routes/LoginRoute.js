import express from "express";
import User from "../DB/models/user.model.js";


const router = express.Router();

router.get("/",(req,res)=>{
    res.send("hello world ");
})



router.post("/login",(req,res)=>{
    console.log(req.body.name);
    res.send("hello");
});

export default router;