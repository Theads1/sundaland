import { Fragment, useState, useEffect } from "react"
import "./merch.css"
import MerchItem from "./MerchItem"
import { useLocation } from "react-router-dom"
import Sidebar from "./Sidebar"


const Merch = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];


  const [clothes, setClothes] = useState([]);

  const [search, setSearch] = useState("")
  const [data,setData] = useState([])

  const getProducts = async () =>{
    const response = await fetch(`http://localhost:5000/api/merch/search?q=${search}`)
    const products = await response.json();
    setData(products)
    console.log(products)
  }
  
  useEffect(()=>{
    if (search.length > 2){
      getProducts();
    }

  },[search])

  const getClothes = async()=>{
    try {
      const response = await fetch(!cat?`http://localhost:5000/api/merch`:`http://localhost:5000/api/merch?category=${cat}`)
      const data = await response.json();
      setClothes(data.rows);
      
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    getClothes();

  },[])


  return (
    <Fragment>
    <article className="merch">
        <h1> Products </h1>
        <input type="search" onChange={(e)=> setSearch(e.target.value)}  placeholder="Search.." className='searchBox' id='searchBox'/>

    <div className="merchContainer">
      
      { search ? data && data.map ((item)=>(
        <MerchItem item={item} key={item.product_id} />
      )):clothes && clothes.map((item)=>(
        <MerchItem item={item} key={item.product_id} />
      ))}
      
    </div>
    </article>
    </Fragment>
  )
}

export default Merch
