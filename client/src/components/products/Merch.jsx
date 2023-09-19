import { Fragment, useState, useEffect } from "react"
import "./merch.css"
import MerchItem from "./MerchItem"


const Merch = () => {
  const [clothes, setClothes] = useState([]);

  const getClothes = async()=>{
    try {
      const response = await fetch("http://localhost:5000/api/merch");
      const data = await response.json();
      console.log(data)
      setClothes(data.rows);
      
    } catch (error) {
      console.error(error.message);
    }
  }
  useEffect(()=>{
    getClothes();
  },[])

  return (
    <Fragment>
    <article className="merch">
        <h1> Products </h1>
    <div className="merchContainer">
      {clothes && clothes.map((item)=>(
        <MerchItem item={item} key={item.product_id} />
      ))}
    </div>
    </article>
    </Fragment>
  )
}

export default Merch
