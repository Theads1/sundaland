import { Fragment } from "react"
import "./register.css"
import Navbar from "../homepage/Navbar"
const Register = () => {
  return (
    <Fragment>
        <div className="register">
        <div className="logoContainer">
            <Navbar/>
        </div>
     <div className="registerContainer">
        <div className="regTitle">Register Here</div>
        <form className="form">
          <p className="message">
            Signup now for access to exclusive savings.{" "}
          </p>
          <div className="flex">
            <label>
              <input className="input" type="text" placeholder="" required="" />
              <span>Firstname</span>
            </label>

            <label>
              <input className="input" type="text" placeholder="" required="" />
              <span>Lastname</span>
            </label>
          </div>

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
          <label>
            <input
              className="input"
              type="password"
              placeholder=""
              required=""
            />
            <span>Confirm password</span>
          </label>
          <p className="agreement">
            Creating an account means you agree to our Terms and Conditions 😃
          </p>
          <button className="submit">Create Account</button>
          <p className="signin">
            Already have an acount ? <a href="#">Signin</a>{" "}
          </p>
        </form>
      </div>
    </div>
    </Fragment>

  );
}

export default Register;
