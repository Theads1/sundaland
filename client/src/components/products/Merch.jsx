import { Fragment, useState, useEffect } from "react"
import "./merch.css"
import MerchItem from "./MerchItem"
import { useLocation } from "react-router-dom"


const Merch = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];


  const [clothes, setClothes] = useState([]);
  // const [category, setCategory]= useState([])

  const getClothes = async()=>{
    try {
      const response = await fetch(!cat?`http://localhost:5000/api/merch`:`http://localhost:5000/api/merch?category=${cat}`)
      const data = await response.json();
      console.log(data)
      setClothes(data.rows);
      
    } catch (error) {
      console.log(error);
    }
  }
  // const getCat = async()=>{
  //   try {
  //     const response = await fetch(`http://localhost:5000/api/merch?category=${cat}`)
  //     const data = await response.json();
  //     console.log(data)
  //     setClothes(data.rows);
      
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  useEffect(()=>{
    getClothes();
    // getCat();
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
