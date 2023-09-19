// import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes,} from "react-router-dom";


import Cart from "./pages/Cart";
import Details from "./pages/Details";
import Login from "./components/user/Login";
import Register from "./components/user/Register";
import Home from "./pages/Home";
import Products from "./pages/Products";


function App() {

  return (

    //how to say if not logged in - go to login
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/product/:id" element={<Details/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </Router>

          </>
  )
}

export default App;
