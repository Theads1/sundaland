import { useState, useEffect, useContext, } from "react"
import { LoginContext } from "../../App"

const Profile = () => {
  // eslint-disable-next-line no-unused-vars
  const [isAuthenticated,setIsAuthenticated] = useContext(LoginContext)
  const [name, setName] = useState('')

 
 const userName = async() => {
try {
  const response = await fetch ('http://localhost:5000/api/profile',{
    method:"GET",
    headers:{token: localStorage.token}
  })
    const nameParse = await response.json();
    setName(nameParse.username)
} catch (error) {
  console.log(error)
}
 }
 

  useEffect(()=>{
userName()
  },[])
  return (
    <div>
      {isAuthenticated? 
      <h1>Hello, {name}. </h1> :
      <h1>Hello, Friend. Log in for better deals</h1>
      }

    </div>
  )
}

export default Profile
