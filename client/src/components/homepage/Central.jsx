import "./central.css"
import lantern from "../../media/lantern.jpg"
const Central = () => {
  return (
    <main className="cContainer">
      <article className="cWrapper">
       <figure className="cImage">
        <img src={lantern} className="jacko"/>
       </figure>
       <section className="cInfo">
        <h1 className="cTitle"> Scary Deals</h1>
        <p className="cDesc">...for the whole family </p>
        <button className="cshop"> Shop now</button>

       </section>

      </article>
    </main>
  )
}

export default Central
