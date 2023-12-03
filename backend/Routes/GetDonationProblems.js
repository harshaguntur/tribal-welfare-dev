import express from "express";
import GetDonationCntrl from "../controllers/GetDonationProblems.js";




const GetDonationProblemsRouter = express.Router();


GetDonationProblemsRouter.get("",GetDonationCntrl);


export default GetDonationProblemsRouter;