import { Fragment,} from "react"
import { Link, } from 'react-router-dom'
import "./sidebar.css"
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';

const Sidebar = () => {


  return (
    <Fragment>
    <div className="sideContainer">
      <div className="sideWrapper">
        <span className="sideTop">
            <p> Categories</p>
            <ul>
                <li>
                <Link to={`/products/`} target="_blank">
                   All
                </Link>
                </li>
                <li>
                <Link to={`/products/boys`} target="_blank">
                    Boys
                </Link>
                </li>

                <Link to={`/products/girls`} target="_blank">
                <li>
                    Girls
                </li>
                </Link>
                <Link to={`/products/baby`} target="_blank">
                <li>
                    Baby
                </li>
                </Link>
                <Link to={`/products/books`} target="_blank">
                <li>
                    Books
                </li>
                </Link>
                <Link to={`/products/other`} target="_blank">
                <li>
                    Other
                </li>
                </Link>
            </ul>
        </span>
        <span className="sideCenter">
            <p> Price </p>
            <ul> 
                <li> High-Low</li>
                <li> Low-High</li>
            </ul>
            <input className="slider" defaultValue="50" max="1000" min="0" type="range"/>
        </span>
        <span className="sideCenter">
          <p>Rating</p>
          <div className="rating">
          <input defaultValue="5" name="rating" id="star5" type="radio"/>
         <label htmlFor="star5"></label>
          <input defaultValue="4" name="rating" id="star4" type="radio"/>
           <label htmlFor="star4"></label>
         <input defaultValue="3" name="rating" id="star3" type="radio"/>
         <label htmlFor="star3"></label>
          <input defaultValue="2" name="rating" id="star2" type="radio"/>
          <label htmlFor="star2"></label>
          <input defaultValue="1" name="rating" id="star1" type="radio"/>
         <label htmlFor="star1"></label>
        </div>
        </span>
            <div className="sideBottom">

            <p> More </p>
            <ul> 
                <li> About Us</li>
                <li> Track Package</li>
                <li> Newsletter</li>
                <li className="socials"> <AlternateEmailOutlinedIcon/></li>
                <li className="socials"> <FacebookOutlinedIcon/></li>
                <li className="socials"> <InstagramIcon/></li>


            </ul>
              </div>

    
      </div>
    </div>
    </Fragment>
  )
  
}

export default Sidebar;
