import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'



export default function Layout({children}) {
  return (
    <div className='max-w-[2560px]'>
        <div>

      <Navbar />
        </div>
      <main>
        {children}
      </main>
      <div className='fixed bottom-0'>

      <Footer />
      </div>
    </div>
  )
}
