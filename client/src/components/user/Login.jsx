/* eslint-disable react/prop-types */
import { Fragment, useState } from "react"
import "./login.css"
import { Link } from "react-router-dom"

const Login = ({setAuth}) => {

  const [email, setEmail]= useState("");
  const [password, setPassword]= useState("");
  console.log(email,password)



 const handleSubmit = async(e)=>{ 
  e.preventDefault();
  const body = {email, password}

    try {

      const response = await fetch('http://localhost:5000/auth/login', { 
        method:"POST",
        headers:{"Content-Type" : "application/json",
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods':'POST'},
        body: JSON.stringify(body)
      })
      const log = await response.json();
      console.log(log)
      
    localStorage.setItem("token", log.token);

    setAuth(true);


    } catch (error) {
      console.log(error)
      
    }

  }



  return (
    <Fragment>
    <div className="login">
    <div className="logoContainer">
    </div>
 <div className="loginContainer">
    <div className="logTitle">Login </div>
    <form className="form" onSubmit={handleSubmit}>
      <p className="message">
      Happy Shopping 😃{" "}
      </p>
      <label>
        <input className="input" id="email" type="email" defaultValue={email} onChange={(e)=> setEmail(e.target.value)} />
        <span>Email</span>
      </label>

      <label>
        <input
          className="input"
          id="password"
          type="password"
          defaultValue={password}
          onChange={(e)=> setPassword(e.target.value)}
        />
        <span>Password</span>
      </label>
      <button className="submit" > Log In</button>
      <a href="#">forgot password?</a>{" "}

      <p className="signin">
        Don't have an account ? <Link to={`/register`}>Create an account</Link>{" "}
      </p>
    </form>
  </div>
</div>
</Fragment>
  )
}

export default Login
