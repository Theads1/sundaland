import { Fragment } from "react"
import "./merch.css"
import {categories} from "../../media/fakeData.js"
import MerchItem from "./MerchItem"


const Merch = () => {
  return (
    <Fragment>
    <article className="merch">
        <h1> Products </h1>
    <div className="merchContainer">
      {categories.map(item=>(
        <MerchItem item={item} key={item.id} />
      ))}
    </div>
    </article>
    </Fragment>
  )
}

export default Merch
