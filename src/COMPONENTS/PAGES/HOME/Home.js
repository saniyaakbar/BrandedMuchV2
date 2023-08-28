import React from 'react'
// import Image_Slider from '../../IMAGE_SLIDER/Image_Slider'
import '../HOME/home.css'
// import AllReviews from './CLIENT_REVIEW/AllReviews'
// import Hero from './HERO/Hero'
// import Secondsection from './SecondSection/Secondsection'
// import { SideNav } from '../..'
import SecOne from './SecOne'
import SecTwo from './SecTwo'
import SecThree from './SecThree'
import '../../../index.css'
import SecFour from './SecFour'
import Footer from '../../FOOTER/Footer'
import Cta from '../../Cta'
import SecFive from './SecFive'
import SecSix from './SecSix'
import SecSeven from './SecSeven'
// import { Timeline } from 'gsap/gsap-core';
// import $ from "jquery";
// import { useEffect } from 'react';
// import { Power1 } from 'gsap';
// import Carousel from './Caros/Carousel';

const Home = () => {

  return (
    <div className='home'>
     

    <SecOne/>
   
    <SecThree/>
    <SecTwo/>
    <SecFour/>
    <SecFive/>
    <SecSix/>
    <SecSeven/>
    <Cta/>
    <Footer/>
    </div>
  )
}

export default Home