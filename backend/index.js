import  express  from "express";
import HomeRouter from "./Routes/HomeRoute.js";
import RegisterRouter from "./Routes/RegisterRoute.js"
import ConnectDB from "./DB/ConnectDB.js";
import LoginRouter from "./Routes/LoginRoute.js";
import UploadImgRouter from "./Routes/UploadImg.js";



const app = express();

// middleware

//used to access data from frontend 
app.use(express.json());



//router function implement 
app.use("/api",HomeRouter);
app.use("/api/SignUp",RegisterRouter);
app.use("/api/SignIn",LoginRouter);
app.use("/api/UploadImg",UploadImgRouter);



// connecting to DB
ConnectDB();





app.listen(3000,()=>{
    console.log("server active on port 3000");
})