import "../components/user/cart.css"
import Sales from '../components/homepage/Sales'
import Navbar from "../components/homepage/Navbar"
import { Fragment } from "react"


const Cart = () => {
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
                        <div className="cartProduct">
                            <div className="cartDetail">
                                <img className="cartImg" src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" />
                                <span className="productDets">
                                    <span className="pText"> <b>Product: </b>Fjallraven - Foldsack No. 1 Backpack</span>
                                    <span className="pText"> <b>Product ID: </b>1</span>
                                    <span className="pText"> <b>Category: </b>men's clothing</span>

                                </span>
                            </div>
                            <div className="cartPrice">
                                <span className="productAmountCont">
                                    <i className="removeCart fa fa-minus"> </i>
                                    <div className="productAmount"> 2 </div>
                                    <i className="addCart fa fa-plus"> </i>
                                    
                                </span>
                                <div className="productPrice"> $ 50 </div>
                            </div>
                        </div>
                        <hr />
                        <div className="cartProduct">
                            <div className="cartDetail">
                                <img className="cartImg" src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" />
                                <span className="productDets">
                                    <span className="pText"> <b>Product: </b>Fjallraven - Foldsack No. 1 Backpack</span>
                                    <span className="pText"> <b>Product ID: </b>1</span>
                                    <span className="pText"> <b>Category: </b>men's clothing</span>

                                </span>
                            </div>
                            <div className="cartPrice">
                                <span className="productAmountCont">
                                    <i className="removeCart fa fa-minus"> </i>
                                    <div className="productAmount"> 2 </div>
                                    <i className="addCart fa fa-plus"> </i>
                                    
                                </span>
                                <div className="productPrice"> $ 50 </div>
                            </div>
                        </div>
                    </div>
                    
                    
                    
                    <div className="bottomSummary">
                        <h1 className="sumTitle">
                            Order Summary</h1>
                        <div className="sumItem">
                            <span className="sumItemtext"> Subtotal</span>
                                <span className="sumItemPrice">$100</span>
                        </div>
                        <div className="sumItem">
                            <span className="sumItemtext"> Est. Shipping</span>
                                <span className="sumItemPrice">Free</span>
                        </div>
                        <div className="sumItem">
                            <span className="sumItemtext"> Coupons</span>
                                <span className="sumItemPrice">$-10</span>
                        </div>
                        <div className="sumItem" style={{ fontSize: '25px' }}>
                            <span className="sumItemTextA" style={{ fontWeight: 'bolder' }}> Total</span>
                                <span className="sumItemPrice">$90</span>
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
