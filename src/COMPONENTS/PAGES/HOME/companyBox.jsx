import React from 'react'

function CompanyBox({logo, title, body}) {
  return (
     <div className="company_box">
            <div className="company_logo">
                <img src={logo} alt="" />
            </div>
            <h2>{title}</h2>
            {/* <p>{body}</p> */}
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit, optio!</p>
        </div>
  )
}

export default CompanyBox