import React from 'react'

import "./navbar.css"

const Navbar = () => {
  return (
    <div className='navContainer'>
      <div className='navWrapper'>
        <div className='navLeft'>
        <span className='leftItem'>
        <i className="search fa-solid fa-magnifying-glass"></i>
        <input type="text" className='searchBox'/>
        </span>
        </div>
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
        <div className='navRight'>
        <span className='rightItem'>

        </span>

        </div>
      </div>
    </div>
  )
}

export default Navbar
