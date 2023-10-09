import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import "./navbar.css"
import {  useContext, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom"
import { LoginContext } from '../../App';

const Navbar = () => {

  const [isAuthenticated,setIsAuthenticated] = useContext(LoginContext)
  const quantity = useSelector(state=>state.cart.quantity);

  console.log(isAuthenticated)

  if(isAuthenticated===false){
    localStorage.clear()
  }


  return (
    <div className="navContainer">
      <div className="navWrapper">
        <div className="navLeft">
          <span className="leftItem">{/* what do i put here */}</span>
        </div>
        <Link to={`/`} style={{ textDecoration: "none" }}>
          <div className="navCenter">
            <span className="centerLogo">
              <span className="letter">S</span>
              <span className="letter">U</span>
              <span className="letter">N</span>
              <span className="letter">D</span>
              <span className="letter">A</span>
              <span className="letter">L</span>
              <span className="letter">A</span>
              <span className="letter">N</span>
              <span className="letter">D</span>
            </span>
          </div>
        </Link>
        <div className="navRight">
          <Link
            to={isAuthenticated ? `/profile` : `/register`}
            style={{ color: "black", textDecorationLine: "none" }}
          >
            <span className="rightItem">
              {isAuthenticated ? "Profile" : "Register"}
            </span>
          </Link>

          {isAuthenticated ? (
            <Link
              to={`/logout`}
              style={{ color: "black", textDecorationLine: "none" }}
              onClick={() => setIsAuthenticated(false)}
            >
              {" "}
              <span className="rightItem"> Log Out</span>
            </Link>
          ) : (
            <Link
              to={`/login`}
              style={{ color: "black", textDecorationLine: "none" }}
            >
              {" "}
              <span className="rightItem"> Log In</span>
            </Link>
          )}
          {/* <Link to={isAuthenticated?`/logout`:`/login`} style={{color: 'black',textDecorationLine: 'none'}}>
        <span className='rightItem'>
        { isAuthenticated? 'Log out':'Log in'}   
            </span>
        </Link> */}
          <span className="rightItem">
            <Link to={`/cart`}>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlinedIcon color="action" />
              </Badge>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar
