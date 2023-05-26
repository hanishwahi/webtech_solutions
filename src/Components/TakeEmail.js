import React from 'react'
import { Link } from 'react-router-dom'

import Take_Email from '../Images/TE_IMG1.png'
// import TE_IMG2 from '../Images/TE_IMG2.svg'

function TakeEmail() {
  return (
     <>
     <div className="main-cta-section wf-section my-5">
      <div className="cta-contain">
        <div data-w-id="4392fabf-48df-b122-f9fe-514d9a4d8c2b" className="main-cta-wrapper">
          <div className="main-cta-left-contain">
            <h3 className="main-cta-heading">
              Take your email marketing to the next level!
            </h3>
            <div className="main-cta-text">
              Let’s start to growing your business with WebTechSolutions.
            </div>
            <Link to="/" className="main-cta-button w-button">Get Started</Link><img
              src="/assets/62d1b04ba6695c5178945dfd_Vector45.svg" loading="lazy" alt="" className="cta-left-element" />
          </div>
          <div className="main-cta-image">
            <img src={Take_Email} loading="lazy" srcset= {Take_Email}
                   sizes="(max-width: 767px) 90vw, (max-width: 991px) 550px, (max-width: 1439px) 52vw, 727px" alt="" />
          </div>
        </div>
      </div>
      <img src="/assets/62d1b04ba6695c361f945df4_Hero%20Shape%20Stars.png" loading="lazy"
        data-w-id="4392fabf-48df-b122-f9fe-514d9a4d8c38" alt="" className="cta-star-element" />
        {/* <img
        src={TE_IMG2} loading="lazy"
        data-w-id="4392fabf-48df-b122-f9fe-514d9a4d8c37" alt="" className="main-cta-element" /> */}
    </div>
     </>
  )
}

export default TakeEmail