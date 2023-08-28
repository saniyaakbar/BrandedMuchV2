import React from 'react'
import "../FAQ-PAGE/faq.css"
const Faq = () => {
    const faqs =[
        {
            ques:"what is Brand Socials?",
            ans:"dsfds dsfsd afsdf afaea afa afsf afea afsf",
            by:"Samiya Akbar"
        },
        {
            ques:"what is Brand Socials?",
            ans:"dsfds dsfsd afsdf afaea afa afsf afea afsf",
            by:"Samiya Akbar"
        },
        {
            ques:"what is Brand Socials?",
            ans:"dsfds dsfsd afsdf afaea afa afsf afea afsf",
            by:"Samiya Akbar"
        },

    ]
  return (
    <div className='faq'>
    <h1>Frequently Asked Questions</h1>
    <div className="faq-collection">
    {faqs.map((elem) =>{
return  <div className="faq-box">
<h2>{elem.ques}</h2>
<h3>{elem.ans}</h3>
 <h4>{elem.by}</h4>
</div>

     }
        
     )}
    </div>
  

    </div>
  )
}

export default Faq