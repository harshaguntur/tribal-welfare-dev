import axios from "axios";

import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const Signup = () => {

    const [username , SetUsername] = useState();
    const [email , SetEmail] = useState();
    const [password , SetPassword] = useState();

    const handelUsername = (e)=>{
        // console.log(e.target.value);
        SetUsername(e.target.value);
    }

    const handelUsermail = (e)=>{
      // console.log(e.target.value);
      SetEmail(e.target.value);
  }

  const handelUserpassword = (e)=>{
    SetPassword(e.target.value);
  }

  
  const handelFormSubmit = () =>{
    axios.post("/api/SignUp",{
      username,email,password
    })
  }


    return (

      <>
      <div>
        
      <form  onSubmit={handelFormSubmit}>
        <input type="text" placeholder="username" onChange={handelUsername}/>
        <input type="email" placeholder="email" onChange={handelUsermail} />
        <input type="password" placeholder="password" onChange={handelUserpassword} />
        <button type="submit">Submit </button>


      </form>
      
      
      
      </div>
      
      </>


    )
 
};
export default Signup;
