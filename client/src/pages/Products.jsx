import Navbar from '../components/homepage/Navbar'
import Sales from '../components/homepage/Sales'
import Merch from '../components/products/Merch'
import Sidebar from '../components/products/Sidebar'

const Products = () => {
  return (
     <div className='navbarcontainer'>
      <Sales/>
        <Navbar/>
        <Merch/>
        <Sidebar/>
        </div>

       
  )
}

export default Products
