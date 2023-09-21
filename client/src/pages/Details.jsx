/* eslint-disable no-undef */
import "../components/products/singleItem.css"
import Navbar from "../components/homepage/Navbar"
// import Merch from "../components/products/Merch";
import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";




const Details = () => {
  const location = useLocation();
const id = location.pathname.split("/")[2];
const [detail, setDetail] = useState({});

const [quantity, setQuantity] = useState(1);
const dispatch = useDispatch();

const getDetails = async ()=>{
  try {
    const response = await fetch("http://localhost:5000/api/find/"+id);
    const data = await response.json();
    setDetail(data.rows[0]);
      } catch (error) {
        console.log(error)
    
  }
}

useEffect(()=>{
getDetails();
// eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

const handleQuantity = (type)=>{
  if (type === "dec"){
    quantity>1 && setQuantity(quantity-1)
  }else{
    setQuantity(quantity+1)
  }

};
const addToCart =()=>{
  dispatch(addProduct({...detail, quantity}));
};

  return (
    <div className="detailCont">
      <Navbar />{" "}
      <div>
        <Link to={`/products`}>
        <i className="fa fa-arrow-left" aria-hidden="true">
          {" "}
          Back
        </i>
        </Link>
        <div className="singleContainer">
          <div className="singleWrapper">
            <div className="imgCont">
              <img src={detail.img} />
            </div>
          </div>
          <div className="infoContainer">
            <p className="singleTitle">
              {detail.title}
            </p>
            <p className="singlerating"> rating: {detail.rating} </p>
            <p className="productDetails">
              {detail.description}
            </p>
            <p className="detPrice">Price:$ {detail.price} usd</p>
            <p> This item sales as is. OS. Dimensions available upon request</p>
            <div className="addCont">
              <div className="removeSingle">
                <i className="fa fa-minus" aria-hidden="true" onClick={()=> handleQuantity("dec")}></i>
              </div>
              <span className="singleSum">{quantity}</span>
              <div className="addSingle">
                <i className="fa fa-plus" aria-hidden="true"onClick={()=> handleQuantity("inc")}></i>
              </div>
              <button className="CartBtn" onClick={()=> addToCart(detail)}>
                <span className="IconContainer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 576 512"
                    fill="rgb(17, 17, 17)"
                    className="cart"
                  >
                    <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
                  </svg>
                </span>
                <p className="text">Add to Cart</p>
              </button>
            </div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
}

export default Details
