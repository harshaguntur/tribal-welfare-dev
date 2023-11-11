//import '../css/SignIn.css'
export const SignIn = () => {
 
  return (
    <>

      <h1>LogIn</h1>
      <p>Enter your details to get started</p>

      <div class="input1">
        <h3> Email* </h3>
        <input autocomplete = 'off' autofocus placeholder='Email' type="text"/>
      </div>

      <div class="input2">
        <h3> Password* </h3>
        <input autocomplete = 'off' placeholder='Password'  type="password"/>
      </div>

      <button type='search'>
        Login
      </button>

      <p>By continuing, you are agreeing to the <link>Terms and Conditions</link> and <link>Privacy Policy</link>.</p>

    </>
  )

}