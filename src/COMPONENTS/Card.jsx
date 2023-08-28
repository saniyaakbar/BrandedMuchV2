import React from 'react'

function Card({title,linkText, bodyText}) {
  return (
    <div className='main_card'>
        <div className="card_text">
       {/* <img src="" alt="" /> */}
          <h1>{title}</h1>
          {/* <h3>
            <a href={linkText}>
              View
            </a>
          </h3> */}
        <p>{bodyText}</p>

        </div>
        {/* <div className="card">
        <div className="card_glaze"></div>
        </div> */}
        
    </div>
  )
}

export default Card