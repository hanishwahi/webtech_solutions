import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// import WebtechLogo from '../Images/webtechLogo.png'
import WebtechLogo2 from '../Images/webtechlogo2.png'

function Navbar() {
  const [menuBar, setMenuBar] = useState(false)


  const scrollToHome = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (menuBar) {
      setMenuBar(false);
      console.log("false")
    }
  };

  const showMe = () => {
    if (!menuBar) {
      setMenuBar(true);
      console.log("true")
    }

    else {
      setMenuBar(false);
      console.log("false")
    }
  }


 

  return (
    <>
      <div className="home-hero-section wf-section sticky-top bg-white border-bottom">
        <div data-animation="default" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease"
          role="banner" className="navbar w-nav">
          <div className="nav-container">
            <Link to="/" aria-current="page" className="nav-brand w-nav-brand w--current"><img onClick={scrollToHome} src={WebtechLogo2} loading="lazy" alt="" className="nav-logo-image" /></Link>
            <nav role="navigation" className="nav-menu w-nav-menu">
              <Link onClick={scrollToHome} to="/" aria-current="page" className="nav-link w-nav-link ">Home</Link>
              <Link onClick={scrollToHome} to="/about-us" className="nav-link w-nav-link">About Us</Link>
              <Link onClick={scrollToHome} to="/services" className="nav-link w-nav-link">Services</Link>
              <Link onClick={scrollToHome} to="/" className="nav-link w-nav-link">Our Team</Link>
             
              <Link to="tel:+1(877)966-2244" className="nav-link w-nav-link">+1(877)966-2244</Link>

            </nav>
            <div className="nav-button-contain">
              <Link onClick={scrollToHome} to="/contact-us" className="nav-button out w-button">Contact Us</Link>
            </div>
            <button className='btn shadow-none new-menu' onClick={showMe}><i className="fa-solid fa-bars h2 "></i></button>
            {/* canwa off  */}

            {/* <div className='menu-bar'>
              <button className="btn text-dark shadow-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><i className="fa-solid fa-bars h2"></i></button>
              <div>
              <button onClick={showMe}><i className="fa-solid fa-bars h2"></i></button>

                <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">


                  <div className="offcanvas-header">
                    <Link to="/" aria-current="page" className="nav-brand w-nav-brand w--current canws-nav">
                      <img onClick={scrollToHome} src={WebtechLogo} loading="lazy" alt="" className="nav-logo-image" /></Link>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                  </div>

                  <div className="offcanvas-body">

                    <Link onClick={scrollToHome} to="/" aria-current="page" className="nav-link w-nav-link ">Home</Link>
                    <Link onClick={scrollToHome} to="/services" className="nav-link w-nav-link">Services</Link>
                    <Link onClick={scrollToBlog} to="/" className="nav-link w-nav-link">Blog</Link>
                    <Link onClick={scrollToHome} to="/about-us" className="nav-link w-nav-link">About Us</Link>
                    <Link to="tel:+1(877)966-2244" className="nav-link w-nav-link">+1(877)966-2244</Link>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>


      {menuBar && <>  <div className='newMenuMain'>    
        <div className="offcanvas-body newMenu">
        <Link onClick={scrollToHome} to="/" aria-current="page" className="nav-link w-nav-link ">Home</Link>
        <Link onClick={scrollToHome} to="/services" className="nav-link w-nav-link">Services</Link>
        <Link  to="/" className="nav-link w-nav-link">Blog</Link>
        <Link onClick={scrollToHome} to="/about-us" className="nav-link w-nav-link">About Us</Link>
        <Link to="tel:+1(877)966-2244" className="nav-link w-nav-link">+1(877)966-2244</Link>
      </div>
      </div></>}
    </>
  )
}

export default Navbar