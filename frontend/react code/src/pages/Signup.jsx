import axios from "axios";

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

    let res ;

    axios.get("/api/Signup").then((Response) => res = Response);
    console.log(res);

  };



  return (
    <>
      
    </>
  );
};
export default Signup;
