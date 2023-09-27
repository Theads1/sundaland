import { Fragment } from 'react'
import Categories from '../components/homepage/Categories'
import Central from '../components/homepage/Central'


const Home = () => {
  return (
    <Fragment>
    <div className='homepage'>
    <Central/>
    <Categories/>
    </div>
    </Fragment>
  )
}

export default Home
