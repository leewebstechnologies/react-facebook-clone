import "./login.css";

const Login = () => {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">facebook</h3>
                <span className="loginDesc">Facebook helps you connect and share with the people in your life.</span>
            </div>
            <div className="loginRight">
              <div className="loginBox">
                <input placeholder="Email" className="loginInput" />
                <input placeholder="Password" className="loginInput" />
                <button className="loginButton">Log In</button>
                <span>Forgotten password?</span>
                <button className="loginRegisterButton">Create new account</button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Login