import Categories from '../components/homepage/Categories'
import Central from '../components/homepage/Central'
import Navbar from '../components/homepage/Navbar'
import Sales from '../components/homepage/Sales'

const Home = () => {
  return (
    <div>
    <Sales />
    <Navbar/>
    <Central/>
    <Categories/>
    </div>
  )
}

export default Home
