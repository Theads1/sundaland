import { Fragment } from "react"
import "./login.css"
import Navbar from "../homepage/Navbar"


const Login = () => {
  return (
    <Fragment>
    <div className="login">
    <div className="logoContainer">
        <Navbar/>
    </div>
 <div className="loginContainer">
    <div className="logTitle">Login </div>
    <form className="form">
      <p className="message">
      Happy Shopping 😃{" "}
      </p>

      <label>
        <input className="input" type="email" placeholder="" required="" />
        <span>Email</span>
      </label>

      <label>
        <input
          className="input"
          type="password"
          placeholder=""
          required=""
        />
        <span>Password</span>
      </label>
      <button className="submit">Log In</button>
      <a href="#">forgot password?</a>{" "}

      <p className="signin">
        Don't have an account ? <a href="#">Create an account</a>{" "}
      </p>
    </form>
  </div>
</div>
</Fragment>
  )
}

export default Login
