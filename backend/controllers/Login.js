import express from 'express';
import User from '../DB/models/user.model.js';
import Image from '../DB/models/image.model.js';

export const Login = async (req,res)=>{
    const {email,password} = req.body;
    console.log(email);
    try {

       const user =  await User.findOne(({email}));
      if(password === user.password){
            res.send({
                username : "true",
                password : "true"
            });
      }
      else{
        res.send({
            username : "true",
            password : "false"
        })
      }
      
      if(!user){
        res.send({username : "false"});
      }

    } catch (error) {
        res.send({username : "false"});
    }                  
    
}                            