import  express  from "express";
import LoginRouter from "./Routes/LoginRoute.js";
import RegisterRouter from "./Routes/RegisterRoute.js"
import ConnectDB from "./DB/ConnectDB.js";




const app = express();

// middleware

//used to access data from frontend 
app.use(express.json());
//router function implement 
app.use("/",LoginRouter);
app.use("/register",RegisterRouter);



// connecting to DB
ConnectDB();





app.listen(3000,()=>{
    console.log("server active on port 3000");
})