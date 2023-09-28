import "../components/user/favorites.css"
import { Fragment, } from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

const Favorites = (product) => {
    const favorites = useSelector(state=>state.favorites)

  return (
    <div>
         <Fragment>
        <div className="favoritesCont">
            <div className="favoritesWrapper">
                <h1 className="favoritesTitle">
                    Your favorites
                </h1>
                <h4> click image to show details and add to cart</h4>
                <div className="favoritesBottom">
                    <div className="bottomInfo">
                       {favorites.products.map(product => (
                       <div className="favoritesProduct" key={product.product_id} >
                            <div className="favoritesDetail">
                              <Link to={`/product/${product.product_id}`}><img className="favoritesImg" src={product.img} /></Link> 
                                <span className="productDets">
                                    <span className="pText"> <b>Product: </b>{product.title}</span>
                                    <span className="pText"> <b>Product ID: </b>{product.product_id}</span>
                                    <span className="pText"> <b>Category: </b>{product.category}</span>
                                    <span className="pText"> <b>Price: </b>${product.price}</span>


                                </span>
                            </div>

                        </div>))}
                        <hr />
                    </div>
                    
                    


                </div>
            </div>


        </div>

</Fragment>



    </div>
  )
}

export default Favorites
