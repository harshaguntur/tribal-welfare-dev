import express from 'express';
import { Register } from '../controllers/Register.js';



const RegisterRouter = express.Router();

RegisterRouter.post("",Register);


export default RegisterRouter;




