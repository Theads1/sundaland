import { Link } from "react-router-dom"
const Error = () => {
  return (
    <div>
      <h1> OOPS!! we are working working on this page. Sorry for the inconvenience</h1>
      <Link to={`/`} style={{color:"black"}}> <h3>Go back to shopping</h3></Link>
    </div>
  )
}

export default Error
