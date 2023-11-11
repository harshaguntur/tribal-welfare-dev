import  express  from "express";
import LoginRouter from "./Routes/HomeRoute.js";
import RegisterRouter from "./Routes/RegisterRoute.js"
import ConnectDB from "./DB/ConnectDB.js";




const app = express();

// middleware

//used to access data from frontend 
app.use(express.json());
//router function implement 
app.use("/api",LoginRouter);
app.use("/api/SignUp",RegisterRouter);
app.use("/api/SignIn",RegisterRouter);



// connecting to DB
ConnectDB();





app.listen(3000,()=>{
    console.log("server active on port 3000");
})