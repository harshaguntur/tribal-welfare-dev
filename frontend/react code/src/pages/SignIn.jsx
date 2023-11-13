import '../css/SignIn.css'
export const SignIn = () => {
 
  return (
    <>
     
     <div className="outerdiv">
        <img src="../../public/images/logo bgremove.png" alt="" id="logo" />

        

        <div className="container">
        <form>
            <label>Email*</label> <br/>
            <input type="email" autoFocus placeholder="" className="input"/> <br/>
            <label>Password*</label> <br/>
            <input type="password" placeholder="" className="input"/> <br/>

           <input type="submit" value="Signin" className="input btn"/> 
           
        </form>

           <div className="para">
            <p>
              By continuing you are agreeing to the <br/>
              <span>
                <a href="#">Terms and conditions</a>
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