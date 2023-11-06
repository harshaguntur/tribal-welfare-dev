import mongoose from "mongoose";


const ConnectDB = ()=>{
mongoose.connect("mongodb://localhost:27017")
.then(()=>{
    console.log("connected to database successfully");
})
.catch((err)=>{
    console.log(err);
})

}




export default ConnectDB;