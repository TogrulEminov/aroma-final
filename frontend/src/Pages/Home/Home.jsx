import React from 'react'
import { Helmet } from 'react-helmet'
import Header from '../../Components/Header/Header'
import News from '../../Components/News/News'
import Scale from '../../Components/Scale/Scale'
import Sellers from '../../Components/Sellers/Sellers'
import TrendingProduct from '../../Components/TrendingProduct/TrendingProduct'

const Home = () => {
  return (
    <div>
         <Helmet>
                <title>Home</title>
            </Helmet>
      <Header />
      <TrendingProduct />
      <Scale />
      <Sellers />
      <News/>
    </div>
  )
}

export default Home
