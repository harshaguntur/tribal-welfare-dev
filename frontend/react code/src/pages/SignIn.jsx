import { useEffect, useRef, useState } from 'react';
import '../css/SignIn.css'
import { Link, NavLink ,useNavigate} from "react-router-dom";



export const SignIn = () => {
 
  const navigate = useNavigate();


  const userRef = useRef();
  const errRef = useRef();


  const [user,setUser] = useState('');
  const [pwd,setPwd] = useState('');
  const [errMsg,setErrMsg] = useState('');
  const [success,setSuccess] = useState(false);

  useEffect(()=>{
    userRef.current.focus();
  },[user,pwd])

  useEffect(()=>{
      setErrMsg('');
  },[user,pwd]) 

  return (
    <>
     
     <div className="outerdiv">
        <img src="../../images/logo bgremove.png" alt="" id="logo" />
        <div className="container">
        <form>
            <label>Email*</label> <br/>
            <input type="email" ref={userRef} autoFocus placeholder="" className="input" required/> <br/>
            <label>Password*</label> <br/>
            <input type="password" placeholder="" className="input" required/> <br/>

           <input type="submit" value="Signin" className="input btn"/> 
           
           <div id="SignIn-div">
              <p>Don't have an account ?</p>
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