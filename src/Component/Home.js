import React from 'react'
import { Hero } from './Hero'
import Delivery from './Delivery'
import Slider from './Slider'
import Aboutus from './Aboutus'
import Signin from './Signin'

export default function Home({addToCart}) {
  return (
   <>
   <Hero/>
   <Delivery/>
   <Slider addToCart={addToCart}/>
   <Aboutus/>
   <Signin/>

   </>
  )
}
