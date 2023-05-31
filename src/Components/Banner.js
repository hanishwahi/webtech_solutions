import React from 'react'
 import { Link } from 'react-router-dom'
 
function Banner() {
  const scrollToContact = () => {
    window.scrollTo({ top: 3990, behavior: 'smooth' });
};
  return (
    <>
    <div className="home-hero-top">
         
        <div className="home-hero-wrapper">
          <div className="home-hero-header">
            <h1 data-w-id="b3f9c3ce-27d6-c5d4-fcad-2662440c4edb"  className="home-hero-heading">
            YOUR COMPLETE BUSINESS SOLUTION<br/>
              "WEBTECH SOLUTIONS" SERVICE
            </h1>
            <div data-w-id="fbc19c8e-292c-80bc-c002-20fb48dcf512"   className="home-hero-text">
            With our proficiency in web design, development and marketing, we excel at implementing the most effective web development process to help you create a prosperous online marketing plan. Our team will support you in promoting your company or business, connecting with your target audience, boosting website traffic, enhancing brand image, and driving more leads and sales.
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