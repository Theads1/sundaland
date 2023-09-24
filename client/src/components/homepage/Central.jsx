import "./central.css"
import lantern from "../../media/lantern.jpg"
import { Link } from "react-router-dom"

const Central = () => {
  return (
    <main className="cContainer">
      <div className="cWrapper">
       <figure className="cImage">
        <img src={lantern} className="jacko"/>
       </figure>
       <figure className="cInfo">
        <h1 className="cTitle"> Spooky Deals</h1>
        <p className="cDesc"> annual halloween sale starts October 7</p>
        <Link to={`/products`}><button className="cshop"> Shop All</button></Link>

       </figure>

      </div>
    </main>
  )
}

export default Central
