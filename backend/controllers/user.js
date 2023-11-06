import User from "../DB/models/user.model.js";


export const Register = async(req,res) =>{
    const {username,email,password} = req.body;

    console.log(req.body.username);
    await User.create ({username,email,password});
    res.send("registered successfully");
}