import '../css/SignIn.css'
export const SignIn = () => {
 
  return (
    <>
      <div className='outer-div'>

    <h1>SignIn</h1>
    <p id='start'>Enter your details to get started</p>

    <form action="" id='signIn-form'>

    <div className="email">
      <h3> Email<span className='star'>*</span></h3>
      <input autoFocus placeholder="Email" type="text"/>
    </div>
        
    <div className="password">
        <h3> Password<span className='star'>*</span></h3>
        <input placeholder="Password"  type="password"/>
    </div>

    <button id='SignIn-btn'> Signin </button>

    </form>

    <p id='end'>By continuing, you are agreeing to the <br/><a href='#'>Terms and Conditions</a> and <a href='#'>Privacy Policy</a>.</p>
  
      </div>
    </>
  )

}

export default SignIn;