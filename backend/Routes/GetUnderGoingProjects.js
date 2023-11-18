import express from "express";

import UnderGoingCntrl from "../controllers/GetUnderGoingProjects.js";


const GetUnderGoingProjectsRouter = express.Router();


GetUnderGoingProjectsRouter.get("",UnderGoingCntrl);


export default GetUnderGoingProjectsRouter;