import React from 'react'
import "../../ABOUT/VIDEO PAGE/videos.css"
import vid from "../../../../ASSESTS/vi.jpg"
const Videos = () => {
  return (
    <div className='Videos'>
<div className="videos-left">
 <div className="videos-left-center">
 <h3>Stay Tuned With The Latest Trends</h3>
<button class="button-30" role="button">Contact Us</button>


 </div>

</div>
<div className="videos-right">
<div className="videos-right-vbox">
<img src={vid} alt="" />

</div>
<div className="videos-right-vbox">
<img src={vid} alt="" />

</div>
<div className="videos-right-vbox">
<img src={vid} alt="" />

</div>
<div className="videos-right-vbox">
<img src={vid} alt="" />

</div>
<div className="videos-right-vbox">
<img src={vid} alt="" />

</div>
<div className="videos-right-vbox">
    <img src={vid} alt="" />
</div>

</div>
    </div>
  )
}

export default Videos