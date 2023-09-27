import { Fragment, useEffect, useState, } from "react"
import "./register.css"
import { Link } from "react-router-dom"
const Register = ({setAuth}) => {


  const [name, setName]= useState("");
  const [email, setEmail]= useState("");
  const [password, setPassword]= useState("");



console.log(name, email, password)


const handleSubmit = async (e)=>{
  e.preventDefault();
  const body = {email, name, password}
  try {
    const response = await fetch('http://localhost:5000/auth/register', { 
    method:"POST",
    headers:{"Content-Type" : "application/json",
    'Access-Control-Allow-Origin':'*',
    'Access-Control-Allow-Methods':'POST'},
    body: JSON.stringify(body),
    })

    const regi = await response.json();
    console.log(regi);

    
    localStorage.setItem("token", regi.token);
    setAuth(true);


  } catch (error) {
    console.log(error);}

}

  return (
    <Fragment>
      <div className="register">
        <div className="logoContainer">
        </div>
        <div className="registerContainer">
          <div className="regTitle">Register Here</div>
          <form className="form" onSubmit={handleSubmit} >
          
            <p className="message">
              Signup now for access to exclusive savings.
            </p>
            <label>   username  
            <input
                className="input"
                id="user"
                type="usename"
                defaultValue={name}
                onChange={e=>setName(e.target.value)}
              />
              </label>

            <label>    email   
              <input
              className="input"
                type="email"
                id="email"
                defaultValue={email}
                onChange={e=>setEmail(e.target.value)}
              />
               </label>

            <label>   password   

              <input
                className="input"
                type="password"
                id="pass"
                defaultValue={password}
                onChange={e=>setPassword(e.target.value)}
              />
              </label>
            <p className="agreement">
              Creating an account means you agree to our Terms and Conditions 😃
            </p>
            <button className="submit">Create Account</button>
            <p className="signin">
              Already have an acount ? <Link to={`/login`}>Sign in</Link>
            </p>
          </form>
        </div>
      </div>
    </Fragment>
  );
}

export default Register;
