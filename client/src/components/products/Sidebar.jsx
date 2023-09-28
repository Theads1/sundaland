import { Fragment, useState, } from "react"
import { Link,} from 'react-router-dom'
import "./sidebar.css"
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';

const Sidebar = () => {

//failed sort and filter, check later
//   const asc=()=>{
//     // toys.sort((a,b)=>a.price > b.price?1:-1)
//     toys.sort((a, b) => toys.price(a) - toys.price(b));
//   }

//   const desc =()=>{
//     toys.sort((a, b) => toys.price(b) - toys.price(a));
//   }


  return (
    <Fragment>
    <div className="sideContainer">
      <div className="sideWrapper">
        <span className="sideTop">
            <p> Categories</p>
            <ul>
                <li>
                <Link to={`/products/`} target="top">
                   All
                </Link>
                </li>
                <li>
                <Link to={`/products/boys`} target="_top">
                    Boys
                </Link>
                </li>

                <Link to={`/products/girls`} target="_top">
                <li>
                    Girls
                </li>
                </Link>
                <Link to={`/products/baby`} target="_top">
                <li>
                    Baby
                </li>
                </Link>
                <Link to={`/products/books`} target="_top">
                <li>
                    Books
                </li>
                </Link>
                <Link to={`/products/other`} target="_top">
                <li>
                    Other
                </li>
                </Link>
            </ul>
        </span>
        <span className="sideCenter">
            <p> Price </p>
        <input defaultValue="asc" name="price" id="asc" type="radio" />
         <label htmlFor="asc"> High-Low</label>
         <br/>
          <input defaultValue="desc" name="price" id="desc" type="radio" />
           <label htmlFor="star4">Low-High</label>
        </span>
        <span className="sideCenter">
          <p>Rating</p>
          <div className="rating">
          <input defaultValue="5" name="rate" id="star5" type="radio"/>
         <label htmlFor="star5"></label>
          <input defaultValue="4" name="rate" id="star4" type="radio"/>
           <label htmlFor="star4"></label>
         <input defaultValue="3" name="rate" id="star3" type="radio"/>
         <label htmlFor="star3"></label>
          <input defaultValue="2" name="rate" id="star2" type="radio"/>
          <label htmlFor="star2"></label>
          <input defaultValue="1" name="rate" id="star1" type="radio"/>
         <label htmlFor="star1"></label>
        </div>
        </span>
            <div className="sideBottom">

            <p> More </p>
            <Link to={`/error`} style={{ textDecoration: "none" , color:"black"}}>
            <ul> 
                <li> About Us</li>
                <li> Track Package</li>
                <li> Newsletter</li>
                <li className="socials"> <AlternateEmailOutlinedIcon/></li>
                <li className="socials"> <FacebookOutlinedIcon/></li>
                <li className="socials"> <InstagramIcon/></li>


            </ul>
            </Link>
              </div>

    
      </div>
    </div>
    </Fragment>
  )
  
}

export default Sidebar;
