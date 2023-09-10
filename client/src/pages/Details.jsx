import "../components/products/singleItem.css"
import Navbar from "../components/homepage/Navbar"

const Details = () => {
  return (
    <div className="detailCont">
      <Navbar />{" "}
      <div>
        <i className="fa fa-arrow-left" aria-hidden="true">
          {" "}
          Back
        </i>
        <div className="singleContainer">
          <div className="singleWrapper">
            <div className="imgCont">
              <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" />
            </div>
          </div>
          <div className="infoContainer">
            <p className="singleTitle">
              Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
            </p>
            <p className="singlerating"> rating: 4.5 </p>
            <p className="productDetails">
              Your perfect pack for everyday use and walks in the forest. Stash
              your laptop (up to 15 inches) in the padded sleeve, your everyday
            </p>
            <p className="detPrice">Price:109.95 usd</p>
            <p> This item sales as is. OS. Dimensions available upon request</p>
            <div className="addCont">
              <div className="removeSingle">
                <i className="fa fa-minus" aria-hidden="true"></i>
              </div>
              <span className="singleSum">1</span>
              <div className="addSingle">
                <i className="fa fa-plus" aria-hidden="true"></i>
              </div>
              <button className="CartBtn">
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
