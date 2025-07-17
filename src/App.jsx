import { useState } from 'react'
import './App2.css'
import Navbar from './Components/Navbar/Navbar'
import BannerCarousel from './Components/BannerCarousel/BannerCarousel'
import HomeBanner from './components/HomeBanner/HomeBanner'
import Story from './Sections/Story/Story'
import Product from './Sections/Product/Product'
import Location from './Sections/Location/Location'
import Reviews from './Sections/Reviews/Reviews'
import Careers from './Sections/Careers/Careers'

import storyPhoto from './assets/ice-cream-cones.jpg'


function App() {
  return (
    <>
      <header className='sticky top-0 left-0 bg-white z-50 shadow-md py-3 px-5 md:px-8'>
        <div className="container mx-auto px-8">
          <Navbar />
        </div>
      </header>
      <main>
        <HomeBanner />
        <BannerCarousel />
        <Story storyPhoto={storyPhoto} />
        <Product />
        <Location />
        <Reviews />
        <Careers />
      </main>
      <footer>
        <h2 className='text-8xl'>FOOTER PLACEHOLDER</h2>
      </footer>
    </>
  )
}

export default App;
