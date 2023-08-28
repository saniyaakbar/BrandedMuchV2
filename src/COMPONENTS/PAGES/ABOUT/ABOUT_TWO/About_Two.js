import React from 'react'
import Image_Slider from '../../../IMAGE_SLIDER/Image_Slider'
import './About_Two.css'

function About_Two() {
    return (
        <div className='about_two'>
            <div className="about_two_left">
                <div className="about_two_left_text">
                    <h3>What we do?</h3>
                    <p>Branded much is a place where ideas meet  stories and stories
                        meet trends. We are a team of industry experts who have built
                        start ups from scratch and are here to help your business get
                        its right social presence established and managed through
                        impeccable communcation, visionary designs, flawless management
                        and creative strategies.</p>
                    <button>Watch Us</button>
                </div>

                

                <div class="moon"></div>
                <div class="moon moon2"></div>
                <div class="moon moon3"></div>



            </div>
            <div className="about_two_right">
                <div className="about_two_right_card">
                    <Image_Slider/>
                </div>
                <button className="about_two_right_btm">
                    Watch More
                </button>
                {/* <div ></div> */}
            </div>

            {/* <div className="one"></div> */}
        </div>
    )
}

export default About_Two