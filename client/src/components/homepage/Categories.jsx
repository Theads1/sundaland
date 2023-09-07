import "./categories.css"

const Categories = () => {
  return (
    <div className="categories">
    <p> Featured Categories</p>
    <div className="catcontainer">
        <span className="catCard">
            <h1 className="catTitle">Kid's</h1>
        </span>
        <span className="catCard">
            <h1 className="catTitle">Men's</h1>
        </span>
        <span className="catCard">
            <h1 className="catTitle">Women's</h1>
        </span>
        <span className="catCard">
            <h1 className="catTitle">Jewelry</h1>
        </span>
        <span className="catCard">
            <h1 className="catTitle">Electronics</h1>
        </span>
    </div>
    </div>
  )
}

export default Categories
