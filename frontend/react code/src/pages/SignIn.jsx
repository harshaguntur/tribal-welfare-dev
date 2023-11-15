import { useEffect, useRef, useState } from 'react';
import '../css/SignIn.css'
import { Link, NavLink ,useNavigate} from "react-router-dom";
import axios from 'axios';



export const SignIn = () => {
 
  const navigate = useNavigate();

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
 
  const handelEmail = (e)=>{
     
      setEmail(e.target.value);
  }
  const handelPassword = (e)=>{
      setPassword(e.target.value);
  }

  const handelFormSubmit = ()=>{
    axios.post("/api/SignIn",{
      email, 
      password,
    });
  }

  return (
    <>
     
     <div className="outerdiv">
        <img src="../../images/logo bgremove.png" alt="" id="logo" />
        <div className="container">
        <form onSubmit={handelFormSubmit}>

            <label>Email*</label> <br/>
            <input type="email" onChange={handelEmail} autoFocus placeholder="" className="input" required/> <br/>
            <label>Password*</label> <br/>
            <input type="password" onChange={handelPassword} placeholder="" className="input" required/> <br/>



           <input type="submit" value="SignIn" className="input btn"/> 
           
           <div id="SignIn-div">
              <p><br/>Don't have an Account ?</p>
              <input type="button" value="SignUp" className="input btn"  onClick={()=> navigate("/signup")}/>
            </div>

        </form>

           <div className="para">
            <p>
              By continuing you are agreeing to the <br/>
              <span>
                <a href="#">Terms and conditions </a>
              </span>
              and
              <span>
                <a href="#"> Privacy Policy </a>
              </span>
            </p>
          </div>
        </div>
    </div>
    </>
  )

}

export default SignIn;