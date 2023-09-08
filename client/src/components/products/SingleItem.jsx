import { Fragment, } from "react"
import "./singleItem.css"


const SingleItem = () => {
  // const [single, setSingle] = useState([]);
  // const {id} = useParams();
  // const singleItems = async({id})=>{
  //     try {
  //       const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  //       const data = await response.json();
  //       setClothes(data);

  //     } catch (error) {
  //       console.error(error.message);
  //     }
  //   }
  //   useEffect(()=>{
  //     getClothes();
  //   },[])
  return (
    <Fragment>
      <div className="singleContainer">
        <p> Go Back</p>
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
          <p className="detPrice">Price:109.95</p>
        </div>
      </div>
    </Fragment>
  );
};

export default SingleItem
