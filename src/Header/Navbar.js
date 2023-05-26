import React from 'react'
import { Link } from 'react-router-dom'

import WebtechLogo from '../Images/webtechLogo.png'

function Navbar() {

  const scrollToHome = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
  const scrollToBlog = () => {
    window.scrollTo({ top: 2985, behavior: 'smooth' });
};
  const scrollToContact = () => {
    window.scrollTo({ top: 3990, behavior: 'smooth' });
};

  return (
     <>
      <div className="home-hero-section wf-section sticky-top bg-white border-bottom">
      <div data-animation="default" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease"
        role="banner" className="navbar w-nav">
        <div className="nav-container">
          <Link to="/" aria-current="page" className="nav-brand w-nav-brand w--current"><img onClick={scrollToHome} src= {WebtechLogo} loading="lazy" alt="" className="nav-logo-image" /></Link>
          <nav role="navigation" className="nav-menu w-nav-menu">
            <Link onClick={scrollToHome} to="/" aria-current="page" className="nav-link w-nav-link ">Home</Link>
            <Link onClick={scrollToHome} to="/services" className="nav-link w-nav-link">Services</Link>
            <Link onClick={scrollToBlog} to="/" className="nav-link w-nav-link">Blog</Link>
            <Link to="/" className="nav-link w-nav-link">About Us</Link>
            <Link to="/" className="nav-button nav-menu black-hover w-button">Contact Us</Link>
          </nav>
          <div className="nav-button-contain">
            <Link  onClick={scrollToContact}  to="/" className="nav-button out w-button">Contact Us</Link>
          </div>
          <div className="menu-button w-nav-button">
            <div className="w-icon-nav-menu"></div>
          </div>
        </div>
      </div>
      
    </div>
     </>
  )
}

export default Navbar