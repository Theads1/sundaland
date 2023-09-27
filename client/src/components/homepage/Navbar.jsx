import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import "./navbar.css"
import {  useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom"

const Navbar = ({setAuth}) => {
  const quantity = useSelector(state=>state.cart.quantity);

  useEffect(()=>{
  })


  return (
    <div className='navContainer'>
      <div className='navWrapper'>
        <div className='navLeft'>
        <span className='leftItem'>
        {/* what do i put here */}
        </span>

        </div>
        <Link to={`/`} style={{textDecoration: 'none'}}>
        <div className='navCenter'>
        <span className='centerLogo'>
          <span className='letter'>S</span>
          <span className='letter'>U</span>
          <span className='letter'>N</span>
          <span className='letter'>D</span>
          <span className='letter'>A</span>
          <span className='letter'>L</span>
          <span className='letter'>A</span>
          <span className='letter'>N</span>
          <span className='letter'>D</span>
         </span>
        </div>
        </Link>
        <div className='navRight'>
        {/* <Link to={ `/login`} style={{color: 'black',textDecorationLine: 'none'}}>
        <span className='rightItem'>
        { 'Login'}   
        
            </span>
        </Link> */}
       {/* { setAuth? 
       <Link to={`/logout`} style={{color: 'black',textDecorationLine: 'none'}}>
       <span className='rightItem'>
         Logout        
           </span>
       </Link>  
       
       :<Link to={`/login`} style={{color: 'black',textDecorationLine: 'none'}}>
        <span className='rightItem'>
          Login        
            </span>
        </Link>

      } */}

        <span className='rightItem'>
          <Link to={`/cart`}>
        <Badge badgeContent={quantity} color="primary">
       <ShoppingCartOutlinedIcon color="action" />
       </Badge>
       </Link>
        </span>

        </div>
      </div>
    </div>
  )
}

export default Navbar
