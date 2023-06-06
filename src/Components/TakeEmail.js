import React from 'react'
import { Link } from 'react-router-dom'
import Digitalmarketingimg from '../Images/Digital-Marketing-1-v.webp'

function TakeEmail() {
  return (
     <>
     <div className="main-cta-section wf-section my-5">
      <div className="cta-contain">
        <div data-w-id="4392fabf-48df-b122-f9fe-514d9a4d8c2b" className="main-cta-wrapper">
          <div className="main-cta-left-contain">
            <h3 className="main-cta-heading">
            Our Digital Marketing Services Will Take Your Business to New Heights!
            </h3>
            <div className="main-cta-text">
            Let’s start to growing your business with Web Tech Solutions Service.
            </div>
            <Link to="/" className="main-cta-button w-button">Get Started</Link> 
          </div>
          <div className="main-cta-image">
            <img src={Digitalmarketingimg} loading="lazy"  
                   sizes="(max-width: 767px) 90vw, (max-width: 991px) 550px, (max-width: 1439px) 52vw, 727px" alt="" />
          </div>
        </div>
      </div>
       
    </div>
     </>
  )
}

export default TakeEmail