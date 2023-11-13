import axios from "axios";
import "../css/SignUp.css";

import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const Signup = () => {
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

    let res;

    axios.get("/api/Signup").then((Response) => (res = Response));
    console.log(res);
  };

  return (
    <>
     

      <div className="outer-div">
        <img src="../../public/images/logo bgremove.png" alt="" id="logo" />

        <div className="container">
          <form onSubmit={handelFormSubmit}>
            <label>Username*</label> <br />
            <input type="useranme" placeholder="" className="input" onChange={handelUsername}/> <br />
            <label>Email*</label> <br />
            <input type="email" placeholder="" className="input" onChange={handelUsermail} /> <br />
            <label>Password*</label> <br />
            <input type="password" placeholder="" className="input" onChange={handelUserpassword}/> <br />
            <input type="submit" value="Signup" className="input btn" /> <br />
            <div id="SignIn-div">
              <p>Already have an Account ?</p>
              <input type="button" value="SignIn" className="input btn" />
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
