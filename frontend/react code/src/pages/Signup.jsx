import axios from "axios";
import "../css/SignUp.css";

import { Link, NavLink ,useNavigate} from "react-router-dom";
import { useState } from "react";



const Signup = () => {
  const navigate = useNavigate();
  const [username, SetUsername] = useState();
  const [email, SetEmail] = useState();
  const [password, SetPassword] = useState();

  const handelUsername = (e) => {
    // console.log(e.target.value);
    SetUsername(e.target.value);
  };

  const handelUsermail = (e) => {
    // console.log(e.target.value);
    SetEmail(e.target.value);
  };

  const handelUserpassword = (e) => {
    SetPassword(e.target.value);
  };

  const handelFormSubmit = () => {
    // e.preventDafult();
    // console.log(e);
    // console.log(e.target);
    axios.post("/api/SignUp", {
      username,
      email,
      password,
    });

    navigate("/");

    

  };

  return (
    <>
     

      <div className="outer-div">
        <img src="../../images/logo bgremove.png" alt="" id="logo" />

        <div className="container">
          <form onSubmit={handelFormSubmit}>
            <label>Username*</label> <br />
            <input type="useranme" placeholder="" className="input" onChange={handelUsername}  required/> <br />
            <label>Email*</label> <br />
            
            <input type="email" placeholder="" className="input" onChange={handelUsermail} required/> <br />
            <label>Password*</label> <br />
            <input type="password" placeholder="" className="input" onChange={handelUserpassword} required /> <br />

           <input type="submit" value="Signup" className="input btn" /> 

          
           <br />
           
            <div id="SignIn-div">
              <p>Already have an Account ?</p>
              <input type="button" value="SignIn" className="input btn"  onClick={()=> navigate("/signin")}/>
            </div>
          </form>

          <div className="para">
            <p>
              By continuing you are agreeing to the <br />
              <span>
                <a href="#">Terms and conditions</a>
              </span>{" "}
              and
              <span>
                <a href="#"> Privacy Policy </a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Signup;
