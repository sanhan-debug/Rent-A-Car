import React from 'react'
import HeroCarousel from '../../../Components/User/Hero'
import About from '../About'
import Services from '../Services'
import CarCard from '../../../Components/User/Cars'

function Home() {
  return (
   <>
   <HeroCarousel/>
   <CarCard/>
   <About/>
   <Services/>
   </>
  )
}

export default Home