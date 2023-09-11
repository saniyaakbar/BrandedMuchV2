import React from 'react'
import Card from '../../Card'

function SecTwo() {
  return (
    <div className='sec_two'>
     
        <h1><span>Content</span> Branding is for <span>everyone,</span> everytime, <span>everywhere!</span> </h1>
   
      <div className="cards">
      <Card title={"1800+ "} subText={"Influencers"}/>
      <Card title={"250+ "} subText={"Celebrities"}/>
      <Card title={"170+ "} subText={"Ads"}/>
      <Card title={"25+ "} subText={"Events"}/>
      <Card title={"400+ "} subText={"Brands"}/>
      <Card title={"15+ "} subText={"Startups"}/>
      </div>
    </div>
  )
}

export default SecTwo