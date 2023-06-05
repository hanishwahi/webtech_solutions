import React from 'react'
import { Link } from 'react-router-dom'
import Digitalmarketing3 from '../../Images/DigitalMarketing3.png'
import Webdevelopment2 from '../../Images/WebsiteDevelopment2.png'
import Appdevelopment from '../../Images/MobileAppdevelopment.png'
import Graphicdesign from '../../Images/graphic-design.jpg'
import Services_Enterprice from '../../Images/Services_websolution1.png'
import Whychooseus from '../../Images/whychooseus.jpg'
import Servicebanner from '../../Images/ourService1.jpg'



function Services() {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <>

      <div className='row'>
        <div className='col px-0'>
          <img className='overflow-hidden px-0'
            src={Servicebanner}
            alt='' />
        </div>
         
      </div>
      <div className="home-tabs-section wf-section mb-5" id="SERVICES">
        <div data-w-id="95d7781a-fa4b-8be9-8175-88d05612bb2f" className="home-tabs-wrapper">
          <div className="hob-tabs-header">
            <h3 className="home-tabs-heading">Our Services</h3>
            <div className='py-3'>
              <h5 className="home-tabs-sub-heading">Powerful Solutions for Business Transformation:</h5>
              <div className="home-tabs-header-text">
                Whether you need a simple yet elegant portfolio website or a complex e-commerce platform, we tailor our solutions to meet your unique business goals and requirements. Our websites are not just visually appealing, but they are also optimised for search engines (SEO) to improve your online visibility and attract organic traffic.
                With our innovative web design and development techniques, you can transform your website into a valuable source of visitors and revenue.
              </div>
            </div>
            <div className='row py-md-5'>
              <div className='col-md-6 align-self-center'>
                <img src={Services_Enterprice} alt='' />
              </div>
              <div className='col-md-6 align-self-center py-3'>
                <h5 className="home-tabs-sub-heading">Our Enterprise App And Web Solutions Can Help You Strengthen Your Brand.</h5>
                <div className="home-tabs-header-text">
                  Whether you need a simple yet elegant portfolio website or a complex e-commerce platform, we tailor our solutions to meet your unique business goals and requirements. Our websites are not just visually appealing, but they are also optimised for search engines (SEO) to improve your online visibility and attract organic traffic.
                  With our innovative web design and development techniques, you can transform your website into a valuable source of visitors and revenue.
                </div>
                <Link onClick={scrollToTop}
                  to="/contact-us"
                  className="black-small-button3 w-button">Get Free Consultation</Link>
              </div>
            </div>
            <div className='row py-3 py-md-5 justify-content-center'>
              <div className='text-center'>
                <h5 className="home-tabs-heading">WHY CHOOSE US</h5>
                <div className="home-tabs-header-text text-center">
                  FOR YOUR WEB DESIGN & DEVELOPMENT NEEDS?
                </div>

              </div>
              <div className='col-md-6'>
                <img src={Whychooseus} alt='' />
              </div>
            </div>
          </div>

          <div className='py-3'>
            <ul className="nav nav-tabs mb-3" id="ex1" role="tablist">
              <li className="nav-item" role="presentation">
                <a className="nav-link active" id="ex1-tab-1" data-bs-toggle="tab" href="#ex1-tabs-1" role="tab" aria-controls="ex1-tabs-1" aria-selected="true">Digital Marketing</a>
              </li>
              <li className="nav-item" role="presentation">
                <a className="nav-link" id="ex1-tab-2" data-bs-toggle="tab" href="#ex1-tabs-2" role="tab" aria-controls="ex1-tabs-2" aria-selected="false">Web Development</a>
              </li>
              <li className="nav-item" role="presentation">
                <a className="nav-link" id="ex1-tab-3" data-bs-toggle="tab" href="#ex1-tabs-3" role="tab" aria-controls="ex1-tabs-3" aria-selected="false">App Development</a>
              </li>
              <li className="nav-item" role="presentation">
                <a className="nav-link" id="ex1-tab-4" data-bs-toggle="tab" href="#ex1-tabs-4" role="tab" aria-controls="ex1-tabs-4" aria-selected="false">Graphic Designing</a>
              </li>
            </ul>
          </div>


          <div className="tab-content" id="ex1-content">
            {/* digitalmarketing  */}
            <div className="tab-pane fade show active" id="ex1-tabs-1" role="tabpanel" aria-labelledby="ex1-tab-1">
              <div data-w-tab="Tab 1" className="email w-tab-pane w--tab-active">
                <div className="home-tabs-content-contain shadow">
                  <div className="home-tabs-left-wrap">
                    <h5 className="home-tabs-sub-heading">Digital Marketing Services:</h5>
                    <h4>Make Your Online Presence with our team of professionals In Digital Marketing Services</h4>
                    <div className="tabs-content-text">
                      Navigating the digital playing field is more challenging than ever.
                      Forward thinking businesses work with Web Tech Solutions Services to maximize their internet marketing efficiency and results.
                      <br /><br />

                      To market your business to the appropriate customers at the right time, we provide specialised digital marketing services and use online marketing techniques that are at the forefront of the industry.<br /><br />
                      Our Digital Marketing Services will take your business to new heights!


                    </div>
                    <div>
                      <Link onClick={scrollToTop}
                        to="/services/digital-marketing"
                        className="black-small-button2 w-button">Read More</Link>

                    </div>
                  </div>
                  <div className="home-tabs-right-tab">
                    <img loading="lazy"
                      src={Digitalmarketing3}
                      alt=""
                      className="tab-image tab-1" />
                  </div>
                </div>
              </div>
            </div>
            {/* web development*/}
            <div className="tab-pane fade text-dark" id="ex1-tabs-2" role="tabpanel" aria-labelledby="ex1-tab-2">
              <div data-w-tab="Tab 1" className="email w-tab-pane w--tab-active">
                <div className="home-tabs-content-contain shadow">
                  <div className="home-tabs-left-wrap">
                    <h5 className="home-tabs-sub-heading">Website Development:</h5>
                    <h4>Achieve your business goals with web development solutions</h4>
                    <div className="tabs-content-text">
                      Unleash the power of your online presence with our cutting-edge web development solutions. From stunning designs to seamless functionality, we create websites that captivate your audience and drive success. Elevate your digital game with our expert team.
                    </div>
                    <h5 className="home-tabs-sub-heading">Web Development Solution We Provide:</h5>
                    <ul>
                      <li className='mb-2'>Informational Websites</li>
                      <li className='mb-2'>Custom Web Development</li>
                      <li className='mb-2'>E-Commerce Solutions</li>
                      <li className='mb-2'>Intranet and Extranet Portals</li>
                      <li className='mb-2'>Web-based Enterprise Solutions</li>

                    </ul>

                    <Link onClick={scrollToTop}
                      to="/services/web-development"
                      className="black-small-button2 w-button">Read More</Link>
                  </div>
                  <div className="home-tabs-right-tab">
                    <img loading="lazy"
                      src={Webdevelopment2}
                      alt=""
                      className="tab-image tab-1" />
                  </div>
                </div>
              </div>
            </div>
            {/* app development*/}
            <div className="tab-pane fade" id="ex1-tabs-3" role="tabpanel" aria-labelledby="ex1-tab-3">
              <div data-w-tab="Tab 1" className="email w-tab-pane w--tab-active">
                <div className="home-tabs-content-contain shadow">
                  <div className="home-tabs-left-wrap">
                    <h5 className="home-tabs-sub-heading">Mobile App Development:</h5>
                    <h4>Transforming Ideas into Seamless Apps</h4>
                    <div className="tabs-content-text">
                      Experience the power of our mobile app development service.<br /><br />
                      Looking for services to develop custom mobile applications? To create your mobile solution, collaborate with the leading mobile app developers in the sector. We work with you to properly promote your company's online presence and win over the mobile-mad public.

                    </div>
                    <Link onClick={scrollToTop}
                      to="/services/app-development"
                      className="black-small-button2 w-button">Read More</Link>

                  </div>
                  <div className="home-tabs-right-tab">
                    <img loading="lazy"
                      src={Appdevelopment}
                      alt=""
                      className="tab-image tab-1" />
                  </div>
                </div>
              </div>
            </div>
            {/* graphic design*/}
            <div className="tab-pane fade" id="ex1-tabs-4" role="tabpanel" aria-labelledby="ex1-tab-4">

              <div data-w-tab="Tab 1" className="email w-tab-pane w--tab-active">
                <div className="home-tabs-content-contain shadow">
                  <div className="home-tabs-left-wrap">
                    <h5 className="home-tabs-sub-heading">Graphic Designing</h5>
                    <h4>Unleash Your Creativity with Stunning Graphic Designing Services</h4>
                    <div className="tabs-content-text">
                      Transform your vision into captivating visuals with our expert graphic designing services. From logos to banners, we bring your brand to life with innovative designs, seamless typography, and eye-catching layouts. Elevate your visual presence today!
                    </div>
                    <Link onClick={scrollToTop}
                      to="/services/graphic-designing"
                      className="black-small-button2 w-button">Read More</Link>

                  </div>
                  <div className="home-tabs-right-tab">
                    <img loading="lazy"
                      src={Graphicdesign}
                      alt=""
                      className="tab-image tab-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </>
  )
}

export default Services
