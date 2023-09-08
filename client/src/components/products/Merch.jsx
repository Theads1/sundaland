import { Fragment, useState, useEffect } from "react"
import "./merch.css"
import MerchItem from "./MerchItem"


const Merch = () => {
  const [clothes, setClothes] = useState([]);

  const getClothes = async()=>{
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setClothes(data);
      
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
      {clothes.map(item=>(
        <MerchItem item={item} key={item.id} />
      ))}
    </div>
    </article>
    </Fragment>
  )
}

export default Merch
