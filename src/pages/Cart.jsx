/* eslint-disable react/jsx-key */
import "../components/user/cart.css"
import { Fragment } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const Cart = (product) => {


    const cart = useSelector(state=>state.cart);



    // const handleQuantity = (type)=>{
    //     if (type === "dec"){
    //       quantity>0 && setQuantity(quantity-1)
    //     }else{
    //       setQuantity(quantity+1)
    //     }};
  return (
    <Fragment>
        <div className="cartCont">
            <div className="cartWrapper">
                <h1 className="cartTitle">
                    Your Cart
                </h1>
                <div className="cartTop">
                    <Link to={'/products'}><button className="topBtna">Continue Shopping</button></Link>
                    <div className="topInfo">
                        <Link to={`/favorites`}><span className="topTexts">Favorites</span></Link>

                    </div>
                   <Link to={`/error`}> <button className="topBtnb">Checkout Now</button></Link>
                    </div>
                <div className="cartBottom">
                    <div className="bottomInfo">
                       {cart.products.map(product => (
                       <div className="cartProduct" key={product.product_id} >
                            <div className="cartDetail">
                                <img className="cartImg" src={product.img} />
                                <span className="productDets">
                                    <span className="pText"> <b>Product: </b>{product.title}</span>
                                    <span className="pText"> <b>Product ID: </b>{product.product_id}</span>
                                    <span className="pText"> <b>Category: </b>{product.category}</span>

                                </span>
                            </div>
                            <div className="cartPrice">
                                <span className="productAmountCont">
                                    {/* add working code here for plus/minus */}
                                    <i className="removeCart fa fa-minus"> </i>
                                    <div className="productAmount"> {product.quantity} </div>
                                    <i className="addCart fa fa-plus"> </i>
                                    
                                </span>
                                <div className="productPrice"> {product.price*product.quantity} </div>
                                
                                    {/* add remove button */}
                            </div>

                        </div>))}
                        <hr />
                    </div>
                    
                    
                    
                    <div className="bottomSummary">
                        <h1 className="sumTitle">
                            Order Summary</h1>
                        <div className="sumItem">
                            <span className="sumItemtext"> Subtotal</span>
                                <span className="sumItemPrice">{Math.ceil(cart.total).toFixed(2)}</span>
                        </div>
                        <div className="sumItem">
                            <span className="sumItemtext"> Est. Shipping</span>
                                <span className="sumItemPrice">Free</span>
                        </div>
                        <div className="sumItem">
                            <span className="sumItemtext"> Taxes</span>
                                <span className="sumItemPrice">included in total</span>
                        </div>
                        <div className="sumItem">
                            <span className="sumItemtext"> Coupons</span>
                                <span className="sumItemPrice">$0</span>
                        </div>
                        <div className="sumItem" style={{ fontSize: '25px' }}>
                            <span className="sumItemTextA" style={{ fontWeight: 'bolder' }}> Total</span>
                                <span className="sumItemPrice">{Math.ceil(cart.total).toFixed(2)}</span>
                        </div>
                        <Link to={`/error`}><button className="topBtnb">Checkout Now</button></Link>


                    </div>


                </div>
            </div>


        </div>

</Fragment>



  )
}

export default Cart;
