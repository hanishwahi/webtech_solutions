import React from 'react'
import { Link } from 'react-router-dom'
import SerImg from '../Images/Ser_socialMed.svg'
import SerImg2 from '../Images/Ser_socialMed2.png'

function Services() {
  return (
     <>
<div className="home-tabs-section wf-section mb-5" id="SERVICES">
      <div data-w-id="95d7781a-fa4b-8be9-8175-88d05612bb2f"   className="home-tabs-wrapper">
        <div className="hob-tabs-header">
          <h3 className="home-tabs-heading">Our Services</h3>
          <div className="home-tabs-header-text">
            We offer a range of services to help you succeed in the digital
            world. From website design and development, to digital marketing
            services such as SEO, PPC, content creation, and more – our team
            of experienced developers and marketers have the skills and
            knowledge to provide you with the best customized solutions
            tailored to your individual needs.
          </div>
        </div>

        <ul className="nav nav-tabs mb-3" id="ex1" role="tablist">
  <li className="nav-item" role="presentation">
    <a className="nav-link active" id="ex1-tab-1" data-bs-toggle="tab" href="#ex1-tabs-1" role="tab" aria-controls="ex1-tabs-1" aria-selected="true" >Digital Marketing</a>
  </li>
  <li className="nav-item" role="presentation">
    <a className="nav-link" id="ex1-tab-2" data-bs-toggle="tab" href="#ex1-tabs-2" role="tab" aria-controls="ex1-tabs-2" aria-selected="false" >Web Developmet</a>
  </li>
  <li className="nav-item" role="presentation">
    <a className="nav-link" id="ex1-tab-3" data-bs-toggle="tab" href="#ex1-tabs-3" role="tab" aria-controls="ex1-tabs-3" aria-selected="false" >App Development</a>
  </li>
</ul>
<div className="tab-content" id="ex1-content">
  <div className="tab-pane fade show active" id="ex1-tabs-1" role="tabpanel" aria-labelledby="ex1-tab-1">
  <div data-w-tab="Tab 1" className="email w-tab-pane w--tab-active">
                <div className="home-tabs-content-contain shadow">
                  <div className="home-tabs-left-wrap">
                    <h5 className="home-tabs-sub-heading">Social Magnet</h5>
                    <h4>Grow your social media with email</h4>
                    <div className="tabs-content-text">
                      Wow your audience with a professional-looking email!
                      Start with a template or build a new design from
                      scratch. Add the social buttons for your audience to
                      follow you online.
                    </div>
                    <Link href="/" className="black-small-button2 w-button">Get Quote</Link><img loading="lazy"
                      src="/assets/62d1b04ba6695c2386945dcd_Vector3.svg" alt="" className="home-tabs-element" /><img
                      loading="lazy" src="/assets/62d1b04ba6695cee5d945dce_62.svg" alt=""
                      className="home-tabs-element _2" />
                  </div>
                  <div className="home-tabs-right-tab">
                    <img loading="lazy" src={SerImg} alt=""
                      className="tab-image tab-1" /><img loading="lazy"
                      src={SerImg2} alt=""
                      className="tabs-image absolute tab-1" />
                  </div>
                </div>
              </div>
  </div>
  <div className="tab-pane fade text-dark" id="ex1-tabs-2" role="tabpanel" aria-labelledby="ex1-tab-2">
    Tab 2 content
  </div>
  <div className="tab-pane fade" id="ex1-tabs-3" role="tabpanel" aria-labelledby="ex1-tab-3">
    Tab 3 content
  </div>
</div>


        
       
        
      </div>
    </div>
     </>
  )
}

export default Services