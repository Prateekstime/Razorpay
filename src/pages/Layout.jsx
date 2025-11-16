import React from 'react'
import Footer from '../components/sections/Footer'
import Navbar from '../components/Navbar'



export default function Layout({children}) {
  return (
    <div className='w-full '>
        <div className='fixed top-0 z-50 w-full'>

      <Navbar />
        </div>
      <main>
        {children}
      </main>
      <div className='relative bottom-0'>

      <Footer />
      </div>
    </div>
  )
}
