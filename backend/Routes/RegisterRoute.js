import express from 'express';
import { Register } from '../controllers/user.js';



const router = express.Router();

router.post("",Register);


export default router;




