/* eslint-disable react/prop-types */
import { Fragment, useContext, useState, } from "react"
import "./login.css"
import { Link,useNavigate } from "react-router-dom"
import { LoginContext } from "../../App"
import { toast } from 'react-toastify';


const Login = () => {
  const [isAuthenticated,setIsAuthenticated] = useContext(LoginContext)
  const navigate = useNavigate();
  const [email, setEmail]= useState("");
  const [password, setPassword]= useState("");


 const handleSubmit = async(e)=>{ 
  e.preventDefault();

  const body = {email, password}

    try {

      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/auth/login`, { 
        method:"POST",
        headers:{"Content-Type" : "application/json",
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods':'POST',
      'Authorization':'Bearer:'+localStorage.getItem('access')},
        body: JSON.stringify(body)
      })


      const log = await response.json();

    localStorage.setItem("token", log.token);

    if (response.status === 200){
      setIsAuthenticated(true);
       navigate('/profile')
       toast.success("user logged in")
    }else{
      toast.error(log)
    }
    } catch (error) {
      console.log(error)
      
    }

  }
  // useEffect(() =>{
  //   handleSubmit();
  // },[])



  return (
    <Fragment>
      <div className="login">
        <div className="logoContainer"></div>
        <div className="loginContainer">
          <div className="logTitle">Login </div>
          <form className="form" onSubmit={(e)=>handleSubmit(e)}>
            <p className="message">Happy Shopping 😃 </p>
            <label>
              Email
              <input
                className="input"
                id="email"
                type="email"
                defaultValue={email}
                onChange={e => setEmail(e.target.value)}
              />
            </label>
            <label>
              {" "}
              Password
              <input
                className="input"
                id="password"
                type="password"
                defaultValue={password}
                onChange={e => setPassword(e.target.value)}
              />
            </label>
            <button className="submit" > Log In</button>
            <a href="#">forgot password?</a>{" "}
            <p className="signin">
              You do not have an account ?{" "}
              <Link to={`/register`}>Create an account</Link>{" "}
            </p>
          </form>
        </div>
      </div>
    </Fragment>
  );
}

export default Login
