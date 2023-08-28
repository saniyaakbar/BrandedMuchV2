import React from 'react'
import './BlogOne.css'
// import { BsArrowBarRight} from '@react-icons/all-files/bs'

function BlogOne() {
  return (
    <div className='blog_one'>
        <div className="blog_one_left">
            <div className="blog_one_left_text">
                <h1>Stay Tuned With Trends</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, nobis rerum in tempora culpa omnis magnam quas vel reprehenderit doloremque, repudiandae porro nesciunt nulla corporis mollitia, earum explicabo odit veritatis, atque debitis sunt!</p>
                <button>Sign Up Now</button>
            </div>
        </div>
        <div className="blog_one_right">
            <div className="blog_one_right_overlay"></div>
            <div className="blog_one_right_btm">
                <div className="blog_one_right_btm_img">

                </div>
                <button> View More </button>
            </div>
        </div>
    </div>
  )
}

export default BlogOne