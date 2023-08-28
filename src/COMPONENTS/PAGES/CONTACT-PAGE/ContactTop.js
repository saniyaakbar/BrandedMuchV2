import React from 'react'

function ContactTop() {
  return (
    <div className='Contact'>
        <div className="contact-left">
          
        <div className="contact-left-leftbar">
        <div className="contact-left-leftbar-logo">
          <img src="" alt="" />
          </div>      
            <div className="contact-left-leftbar-social">
          
          </div>

          </div>

          <div className="contact-left-background">
          
          </div>
        </div>
        <div className="contact-right">
        <div className="contact-right-top">
          <h2>Send us a Message</h2>
          </div>
          <form className="contact-right-form" action="" >
            <input  className="form-input" type="text" name="" placeholder='Name' id="border" />
            <input className="form-input" type="text" name="" placeholder='E-mail' id="border" />
            <input className="form-input" ype="text" name="" placeholder='Phone' id="border" />
            <input className="form-input" type="text" name="" placeholder='Message' id="border" />
                 <button className='form-btn'><h2>Submit</h2></button>
          </form>
        
        </div>
       
    </div>
  )
}

export default ContactTop