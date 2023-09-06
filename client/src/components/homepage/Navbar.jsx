import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import "./navbar.css"

const Navbar = () => {
  return (
    <div className='navContainer'>
      <div className='navWrapper'>
        <div className='navLeft'>
        <span className='leftItem'>
        <svg className="icon" aria-hidden="true" viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
        <input type="search" placeholder="Search" className='searchBox'/>
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
           Register
        </span>
        <span className='rightItem'>
           Sign In
        </span>
        <span className='rightItem'>
        <Badge badgeContent={4} color="primary">
       <ShoppingCartOutlinedIcon color="action" />
       </Badge>
        </span>

        </div>
      </div>
    </div>
  )
}

export default Navbar
