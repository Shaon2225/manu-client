import React from 'react'
import Banner from './Banner'
import Products from './Products'
import Review from './Review'
import Summary from './Summary'

const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <Products></Products>
        <div className='mx-auto flex justify-center'>
        <h1 className='text-neutral text-3xl text center font-bold mt-24'>Our Business Summary</h1>
        </div>
        <Summary></Summary>
        <Review></Review>
    </div>
  )
}

export default Home