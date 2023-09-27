// import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";


import Cart from "./pages/Cart";
import Details from "./pages/Details";
import Login from "./components/user/Login";
import Profile from "./components/user/Profile"
import Register from "./components/user/Register";
import Home from "./pages/Home";
import Products from "./pages/Products";
import { useState } from "react";
import Navbar from "./components/homepage/Navbar";
import Sales from "./components/homepage/Sales";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const setAuth = boolean=>{
    setIsAuthenticated(boolean);

  }



  return (

    //how to say if not logged in - go to login
    <Router>
      <Sales/>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/products/" element={<Products/>}/>
        <Route path="/products/:category" element={<Products/>}/>
        <Route path="/product/:id" element={<Details/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route exact path="/profile" element={!isAuthenticated? <Profile setAuth={setAuth}/>: <Navigate to="/login"/>} />
        <Route exact path="/login" element={!isAuthenticated? <Login setAuth={setAuth}/> :<Navigate to="/profile"/>}/> 
       <Route exact path="/register" element={!isAuthenticated? <Register setAuth={setAuth}/>:<Navigate to="/login"/>}/>
        {/* need profile path to direct, need to direct to login in not authenticatedor registered. need to direct to profile if authenticated.  */}
      </Routes>
    </Router>

  )
}

export default App;
