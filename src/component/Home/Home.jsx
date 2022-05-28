import React from 'react'
import Banner from './Banner'
import Footer from './Footer'
import Products from './Products'
import Review from './Review'
import Steps from './Steps'
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
        <div className='shadow-lg w-3/4 my-10 mx-auto'>
          <h1 className='text-2xl font-bold text-center text-neutral my-8'>Our Story</h1>
        <div className='grid lg:grid-cols-2 justify-items-center lg:mx-24 sm:mx-5 sm:grid-cols-1 text-neutral'>
          <div>We have started oru Journy in 2020 Jan. Till now we serve more than 150K user all around the world with our world class component. This whole journy is not so easy. we have learnet mny things from the journy and implement thoes leassons to imporve our quality and customer service. Over the time our service is becoming more and more good and qualityfull that we getting new user over the time. We hit 100k user and our next goal is to satisfied 200K at the end of 2022.</div>
          <Steps></Steps>
        </div>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default Home