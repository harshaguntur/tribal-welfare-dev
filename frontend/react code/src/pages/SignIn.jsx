import '../css/SignIn.css'
export const SignIn = () => {
 
  return (
    <>

    <h1>SignIn</h1>
    <p id='start'>Enter your details to get started</p>

    <div className="email">
      <h3> Email<form>*</form></h3>
      <input autoFocus placeholder="Email" type="text"/>
    </div>
        
    <div className="password">
        <h3> Password<form>*</form></h3>
        <input placeholder="Password"  type="password"/>
    </div>

    <button type="search"> Signin </button>

    <p id='end'>By continuing, you are agreeing to the <br/><a href='#'>Terms and Conditions</a> and <a href='#'>Privacy Policy</a>.</p>
  
    </>
  )

}