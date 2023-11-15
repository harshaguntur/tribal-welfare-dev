import  express  from "express";
import { Login } from "../controllers/Login.js";


const LoginRouter = express.Router();

LoginRouter.post("",Login);

export default LoginRouter;