import React from 'react'
import Hero from '../components/sections/Hero'
import Products from '../components/sections/Products'
import StackingCards from '../components/Stacking-Cards'
import Partners from '../components/sections/Partner'
import Cta from '../components/sections/Cta'
import GlobalReach from '../components/sections/GlobalReach'
import CTAA from '../components/sections/Ctaa'
import RayAssistant from '../components/RayAsssitant'
import Footer from '../components/sections/Footer'

const Home = () => {

  return (
    <div>
      <Hero />
      <Products />
      <StackingCards />
      <Partners />
      <Cta/>
      <GlobalReach />
      <CTAA />
      <div className='fixed bottom-10 z-50 right-10'>
        <RayAssistant />
      </div>
       <div className='relative bottom-0'>

      <Footer />
      </div>
    </div>
  )
}

export default Home
