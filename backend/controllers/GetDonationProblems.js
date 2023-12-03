import  express  from "express";
import DonationDB from "../DB/models/donation.model.js";




const GetDonationCntrl =  async (req,res)=>{
    const data = await DonationDB.find();


   res.send(data);

}



export default GetDonationCntrl;


