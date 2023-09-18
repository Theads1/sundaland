import { Fragment } from 'react'
import Categories from '../components/homepage/Categories'
import Central from '../components/homepage/Central'
import Navbar from '../components/homepage/Navbar'
import Sales from '../components/homepage/Sales'

const Home = () => {
  return (
    <Fragment>
    <div className='homepage'>
    <Sales />
    <Navbar/>
    <Central/>
    <Categories/>
    </div>
    </Fragment>
  )
}

export default Home
