import  express  from "express";
import UnderGoingDB from "../DB/models/UnderGoingProjects.modal.js";



const UnderGoingCntrl =  async (req,res)=>{
    const data = await UnderGoingDB.find();

           
   res.send({status : "ok",data : data});

}



export default UnderGoingCntrl;


