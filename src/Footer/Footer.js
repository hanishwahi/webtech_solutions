import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <div className="footer wf-section">
                <div data-w-id="aecf8e52-3d8e-646f-1b9b-4eeb96c54a52" className="footer-wrapper row">
                    <div className="col-lg-3 col-md-6 footer-left-contain">
                    <h6 className="footer-column-heading text-uppercase">webtech solutions</h6>
                        {/* <Link to="/" aria-current="page" className="footer-logo w-inline-block w--current" style={{ maxWidth: "30%" }}><img src="/assets/logo.png" loading="lazy" alt="" className="footer-logo-image" /></Link> */}
                        <div className="footer-right-text">
                            We specialize in creating custom websites that are fast, secure,
                            and optimized for SEO. Our team of experienced developers can also
                            help you with digital marketing services such as SEO, social media
                            management and more. 
                        </div>
                    </div>
                    <div className=" col-lg-4 col-md-6 footer-right-contain">
                        <div className="footer-column">
                            <h6 className="footer-column-heading">ADDRESS</h6>
                            <div className="footer-links-contain">
                                {/* <p className="footer-link">
                                    Plot No - 269,<br /> Phase IV, Udyog Vihar Gurugram , Gurgaon
                                </p> */}
                                <p className="footer-link">
                                     Bestech Business Tower, Office No: 412 Tower-A , 4th Floor, Sahibzada Ajit Singh Nagar, Punjab 160066
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-6 footer-right-contain'>
                        <div className="footer-column ">
                            <h6 className="footer-column-heading">GET IN TOUCH</h6>
                            <div className="footer-links-contain">
                                <Link to="tel:+1(877)966-2244" className="footer-link">+1(877)966-2244</Link><Link
                                    to="mailto:info@webtechsolutionsservice.com" className="footer-link">info@webtechsolutionsservice.com</Link>
                            </div>
                        </div> 
                    </div>
                    <div className='col-lg-2 col-md-6 footer-right-contain'>
                        <div className="footer-column">
                            <h6 className="footer-column-heading">OPENING HOURS</h6>
                            <div className="footer-links-contain">
                                <Link to="/" aria-current="page" className="footer-link w--current">24/7 Support
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div data-w-id="aecf8e52-3d8e-646f-1b9b-4eeb96c54a83" className="footer-divider"></div>
           
        
        </>
    )
}

export default Footer