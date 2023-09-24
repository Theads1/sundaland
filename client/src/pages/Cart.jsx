/* eslint-disable react/jsx-key */
import "../components/user/cart.css"
import Sales from '../components/homepage/Sales'
import Navbar from "../components/homepage/Navbar"
import { Fragment } from "react"
import { useSelector } from "react-redux"


const Cart = (product) => {

    const cart = useSelector(state=>state.cart)
  return (
    <Fragment>
        <Sales/>
        <Navbar/>
        <div className="cartCont">
            <div className="cartWrapper">
                <h1 className="cartTitle">
                    Your Cart
                </h1>
                <div className="cartTop">
                    <button className="topBtna">Continue Shopping</button>
                    <div className="topInfo">
                        <span className="topTexts">Shopping Bag(4)</span>
                        <span className="topTexts">Favorites (0)</span>

                    </div>
                    <button className="topBtnb">Checkout Now</button>
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
                                    <i className="removeCart fa fa-minus"> </i>
                                    <div className="productAmount"> {product.quantity} </div>
                                    <i className="addCart fa fa-plus"> </i>
                                    
                                </span>
                                <div className="productPrice"> {product.price*product.quantity} </div>
                            </div>
                        </div>))}
                        <hr />
                    </div>
                    
                    
                    
                    <div className="bottomSummary">
                        <h1 className="sumTitle">
                            Order Summary</h1>
                        <div className="sumItem">
                            <span className="sumItemtext"> Subtotal</span>
                                <span className="sumItemPrice">{cart.total}</span>
                        </div>
                        <div className="sumItem">
                            <span className="sumItemtext"> Est. Shipping</span>
                                <span className="sumItemPrice">Free</span>
                        </div>
                        <div className="sumItem">
                            <span className="sumItemtext"> Coupons</span>
                                <span className="sumItemPrice">$0</span>
                        </div>
                        <div className="sumItem" style={{ fontSize: '25px' }}>
                            <span className="sumItemTextA" style={{ fontWeight: 'bolder' }}> Total</span>
                                <span className="sumItemPrice">{cart.total}</span>
                        </div>
                        <button className="topBtnb">Checkout Now</button>


                    </div>


                </div>
            </div>


        </div>

</Fragment>



  )
}

export default Cart;
