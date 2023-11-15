import User from "../DB/models/user.model.js";



export const Register = async(req,res) =>{
    const {username,email,password} = req.body;

    // console.log(req.body.username);
   try {
    await User.create ({username,email,password});
   } catch (error) {
    console.log(error);
    
   }
    res.send("there is an creating user");
}

                       



