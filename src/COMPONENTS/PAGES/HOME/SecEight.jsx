import React from 'react'
import CompanyBox from './companyBox'
import realmeLogo from '../../../ASSETS/Realme Logo.png'
import celebfie from '../../../ASSETS/celebfie.svg'

function SecEight() {
  return (
    <div className='sec_eight'>
        <h1 className="title">
        Take our word for it, and also, <span>theirs!</span> 
        </h1>
       

        <div className="companies">
        <CompanyBox 
        logo={realmeLogo}
        title={"Realme"}
        />
        <CompanyBox logo={celebfie}
        title={"Celebfie"}/>
        <CompanyBox 
        title={" the Zappy Box"}
        logo={"https://www.thezappybox.com/cdn/shop/files/new_logo_1000px_1_120x.png?v=1690457035"}
        />
        <CompanyBox
        logo={celebfie}
        title={"People’s group"}/>
        <CompanyBox
        logo={celebfie}
        title={"City Mall"}/>
        <CompanyBox
        logo={celebfie}
        title={"Pure Aatman"}/>
        <CompanyBox 
        logo={celebfie}
        title={" Brand VTF"}/>
        <CompanyBox 
        logo={celebfie}
        title={"Bombay Times Fashion Week"}/>
        <CompanyBox 
        logo={celebfie}
        title={"Codelia Cruises"}/>
        <CompanyBox 
        logo={celebfie}
        title={"Faaniwoods.com"}/>

        </div>
    </div>
  )
}

export default SecEight