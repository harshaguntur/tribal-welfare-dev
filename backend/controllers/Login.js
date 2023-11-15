import express from 'express';
import User from '../DB/models/user.model.js';


export const Login = async (req,res)=>{
    const {email,password} = req.body;
    console.log(email);
    try {
       const user =  User.findOne(({email}));
       console.log(user);
    } catch (error) {
        console.log(error);
    }
    
}                            