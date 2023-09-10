import "./categories.css"

const Categories = () => {
  return (
    <div className="categories">
    <p> Featured Categories</p>
    <div className="catcontainer">
        <span className="catCard">
            <h1 className="catTitle">Boys</h1>
        </span>
        <span className="catCard">
            <h1 className="catTitle">Girls</h1>
        </span>
        <span className="catCard">
            <h1 className="catTitle">Baby</h1>
        </span>
        <span className="catCard">
            <h1 className="catTitle">Books</h1>
        </span>
        <span className="catCard">
            <h1 className="catTitle">& more</h1>
        </span>
    </div>
    </div>
  )
}

export default Categories
