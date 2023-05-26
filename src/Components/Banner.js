import React from 'react'
// import Arrow from '../Images/arrow.svg'
import { Link } from 'react-router-dom'

function Banner() {
  const scrollToContact = () => {
    window.scrollTo({ top: 3990, behavior: 'smooth' });
};
  return (
    <>
    <div className="home-hero-top">
        <div className=" ">
          {/* <img src={Arrow} loading="eager" alt="" className="home-hero-element _2" /> */}
          <div data-w-id="c2a80a9c-385d-1b07-06e8-2c94e24812e6" className="arrow-cover"></div>
        </div>
        {/* <img src="/assets/62d1b04ba6695cab5c945db8_Vector.svg" loading="eager"  
          data-w-id="c2965c99-6bec-05d8-23bf-9ad7f70fa6ef" alt="" className="home-hero-element" /> */}
        <div className="home-hero-wrapper">
          <div className="home-hero-header">
            <h1 data-w-id="b3f9c3ce-27d6-c5d4-fcad-2662440c4edb"  className="home-hero-heading">
              Welcome to WebTechSolutions
            </h1>
            <div data-w-id="fbc19c8e-292c-80bc-c002-20fb48dcf512"   className="home-hero-text">
              Our team of experts have the skills and knowledge to help you
              develop an effective online marketing strategy to promote your
              business and reach your target audience. We can help you
              increase your website traffic, build brand awareness, and
              generate more leads and sales.
            </div>
            <div data-w-id="a0e8f58f-cf68-25b4-f70a-93eceec991ab"  style={{textAlign:"center"}}
              className="home-hero-form-block">
              <Link onClick={scrollToContact} to="/" className="black-small-button w-button" style={{width:"200px"}}>Get In Touch</Link>
            </div>
          </div>
        </div>
      </div>
      <div  className="hero-image-wrapper">
        <img src="/assets/62d1b04ba6695cdb9c945dbb_Hero%20Shape%20Stars.png" loading="eager" 
          data-w-id="311abaf7-3394-90d0-d3e1-453b181c794c" alt="" className="home-hero-element _3" />
        <div className="spacer-y"></div>
      </div>
    </>
  )
}

export default Banner