import { useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Cart from "./pages/Cart";
import Details from "./pages/Details";
import Login from "./components/user/Login";
import Profile from "./components/user/Profile";
import Logout from "./components/user/Logout";
import Register from "./components/user/Register";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Favorites from './pages/Favorites';
import Error from './pages/Error';
import { createContext, useState } from "react";
import Navbar from "./components/homepage/Navbar";
import Sales from "./components/homepage/Sales";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const LoginContext= createContext();

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.token?true:false);

  async function authorize(){
    try {
      const response = await fetch (`${import.meta.env.VITE_BASE_URL}/auth/verify`, {
        method:'GET',
        headers:{token: localStorage.token}
      });
      const auth= await response.json()
      auth===true? setIsAuthenticated(true): setIsAuthenticated(false)     
    } catch (error) {
      console.log(error)
    }
  }

useEffect(()=>{
  authorize()
})


  return (
   <LoginContext.Provider value={[isAuthenticated,setIsAuthenticated]}>
    <Router>
      <Sales/>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/error" element={<Error/>}/>
        <Route path="/favorites" element={<Favorites/>}/>
        <Route path="/products/" element={<Products/>}/>
        <Route path="/products/:category" element={<Products/>}/>
        <Route path="/product/:id" element={<Details/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route exact path="/logout" element={<Logout/>} />
        <Route exact path="/profile" element={<Profile/>} />
        <Route exact path="/login" element={<Login/>}/> 
       <Route exact path="/register" element={<Register/>}/>
        {/* need profile path to direct, need to direct to login in not authenticatedor registered. need to direct to profile if authenticated.  */}
      </Routes>
      <ToastContainer/>
    </Router>

    </LoginContext.Provider>

  )
}

export default App;
