import { Fragment, useState, useEffect } from "react"
import "./merch.css"
import MerchItem from "./MerchItem"
import { useLocation } from "react-router-dom"
import "../products/sidebar.css"

const Merch = () => {

  //for get category
  const location = useLocation();
  const cat = location.pathname.split("/")[2];



//search, map,

  const [data,setData] = useState([]);
  const [toys, setToys] = useState([]);
  const [search, setSearch] = useState("");

  //search bar api

  const getProducts = async () =>{
    const response = await fetch(`http://localhost:5000/api/merch/search?q=${search}`)
    const products = await response.json();
    setData(products)
  }
  
  useEffect(()=>{
    if (search.length > 2){
      getProducts();
    }

  },[search])


  //by category api
  const getToys = async()=>{
    try {
      const response = await fetch(!cat?`http://localhost:5000/api/merch`:`http://localhost:5000/api/merch?category=${cat}`)
      const data = await response.json();
      setToys(data.rows);
      
    } catch (error) {
      console.log(error);
    }
  }
 

  useEffect(()=>{

    getToys();


  },[])

  //sort -- failed. come back to it
  // const [sorted, setSorted] = useState({});

  // useEffect(()=>{
  //  if(sorted==="asc"){
  //   setToys(prev=>
  //     [...prev]).sort((a,b)=>a.price - b.price)
  //  }else if(sorted==="desc"){
  //   setToys(prev=>
  //     [...prev]).sort((a,b)=>a.price - b.price)
  //  }


  // },[sorted])

 


  return (
  <Fragment>
    <article className="merch">
        <h1> Products </h1>
        <input type="search" onChange={(e)=> setSearch(e.target.value)}  placeholder="Search.." className='searchBox' id='searchBox'/>

    <div className="merchContainer">
    
      { search ? data && data.map ((item)=>(
        <MerchItem item={item} key={item.product_id} />
      )):toys && toys.map((item)=>(
        <MerchItem item={item} key={item.product_id} />
      ))}
      
    </div>
    </article>
   
     </Fragment>
  )
}

export default Merch
