import React from 'react'
import Image_Slider from '../../IMAGE_SLIDER/Image_Slider'
import About_One from './About_One'
import About_Three from './ABOUT_THREE/About_Three'
import About_Two from './ABOUT_TWO/About_Two'
import Videos from './VIDEO PAGE/Videos'
import Workstrategy from './WORK STRATEGY PAGE/Workstrategy'


function About() {
  return (
    <>
    <About_One/>
    <About_Two/>
    {/* <About_Three/> */}
    {/* <Image_Slider/> */}
    <Videos/>
    <Workstrategy/>
    </>
  )
}

export default About