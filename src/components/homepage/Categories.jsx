import "./categories.css"

import {Link} from "react-router-dom"

const Categories = () => {

  return (
    <div className="categories">
    <p> Featured Categories</p>
    <div className="catcontainer">
        <span className="catCard">
        <Link to={`/products/boys`} style={{color:"black"}}>
            <h1 className="catTitle">Boys</h1>
            </Link>
        </span>
        <span className="catCard">
        <Link to={`/products/girls`} style={{color:"black"}}>
            <h1 className="catTitle">Girls</h1>
            </Link>
        </span>
        <span className="catCard">
        <Link to={`/products/baby`} style={{color:"black"}}>
            <h1 className="catTitle">Baby</h1>
            </Link>
        </span>
        <span className="catCard">
        <Link to={`/products/books`} style={{color:"black"}}> 
            <h1 className="catTitle">Books</h1>
            </Link>
        </span>
        <span className="catCard">
        <Link to={`/products/other`} style={{color:"black"}}>
            <h1 className="catTitle">& more</h1>
            </Link>
        </span>
    </div>
    </div>
  )
}

export default Categories
