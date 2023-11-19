import  express  from "express";
import HomeRouter from "./Routes/HomeRoute.js";
import RegisterRouter from "./Routes/RegisterRoute.js"
import ConnectDB from "./DB/ConnectDB.js";
import LoginRouter from "./Routes/LoginRoute.js";
import UploadImgRouter from "./Routes/UploadImg.js";
import getImgRouter from "./Routes/GetImg.js";
import UnderGoingProjectsRouter from "./Routes/UploadUnderGoingProjects.js";
import GetUnderGoingProjectsRouter from "./Routes/GetUnderGoingProjects.js";
import ShopItemRouter from "./Routes/UploadShopItem.js";
import GetShopItemsRouter from "./Routes/GetShopItems.js";




const app = express();
                   
// middleware

//used to access data from frontend 
app.use(express.json());
app.use(express.static("uploads"));




//router function implement 
app.use("/api",HomeRouter);
app.use("/api/SignUp",RegisterRouter);
app.use("/api/SignIn",LoginRouter);
app.use("/api/UploadImg",UploadImgRouter);
app.use("/api/GetImg",getImgRouter);
app.use("/api/AddUnderGoingProjects",UnderGoingProjectsRouter);
app.use("/api/GetUnderGoingProjects",GetUnderGoingProjectsRouter);
app.use("/api/AddShopItem",ShopItemRouter);
app.use("/api/GetShopItems",GetShopItemsRouter);




// connecting to DB
ConnectDB();





app.listen(3000,()=>{
    console.log("server active on port 3000");
})






