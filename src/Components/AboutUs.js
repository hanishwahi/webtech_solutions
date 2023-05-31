import React from 'react'
// import Aboutus from '../Images/aboutUs.png'
import Aboutus from '../Images/about-us-banner.jpg'
import Mission from '../Images/about-mission.jpg'

function AboutUs() {
    return (
        <>
            <div className='container-fluid'>
                <div className='row  position-relative'>
                    <div className='col px-0'>
                        <img className='overflow-hidden px-0'
                            src={Aboutus}
                            alt=''/>
                    </div>

                </div>

                <div className='container'>
                    <div className=" row mt-5 tabs-content-text digital_marketing_list">
                        <div className='col'>
                            <div className='text-center row py-4'>
                                <h5 className="home-tabs-sub-heading">About Us
                                </h5>
                                <p className='text-dark'>At Web Tech Solutions Service, we believe that your website is your digital storefront, and it deserves to make a lasting impression. Our expert team of designers and developers combine creativity, technical expertise, and industry best practices to deliver exceptional websites that captivate audiences and drive results, whether it comes to digital strategy, site design, customised programming, e-commerce, and internet marketing.</p>
                            </div>

                            <div className='row py-5'>
                                <div className='col-lg-6 col-md-12 mb-3'>
                                    <img src={Mission}
                                        alt=''/>
                                </div>
                                <div className='col-lg-6 px-lg-5 col-md-12'>
                                <h5 className=" home-tabs-sub-heading">Our Mission & Vision
                                    </h5>
                                    <div className='row'>
                                        <div className='col-md- col-sm-1 col-1'>
                                        <i class="fa-regular fa-circle-dot text-dark"></i>
                                        </div>
                                        <div className='col-md-11 col-sm-11 col-11'>
                                            <p>
                                                <strong>Mission: </strong>Our mission is to improve businesses and improve people's lives through cutting-edge technology.</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-md-1 col-sm-1 col-1'>
                                            <i class="fa-solid fa-eye text-dark"></i>
                                        </div>
                                        <div className='col-md-11 col-sm-11 col-11'>
                                            <p>
                                                <strong>Vision: </strong>We believe that combining our technical and customer experience will produce the best solutions that define your business effectively and aid in achieving your goals.</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-md-1 col-sm-1 col-1'>
                                        <i class="fa-solid fa-bullseye text-dark"></i>
                                        </div>
                                        <div className='col-md-11 col-sm-11 col-11'>
                                            <p>
                                                <strong>Goal: </strong>Our goal is to create visually stunning and user-centric websites that drive engagement, enhance brand perception, and achieve measurable results.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='row py-4'>
                                <h5 className="home-tabs-sub-heading">What makes Web Tech Solutions Unique?
                                </h5>
                                <p className='text-dark'>Nowadays, customers look for something creative that they inspired to take your services as well as products. Therefore, to maintain, it needs a lot of effective strategies and focuses and which makes <strong>Web Tech Solutions</strong> Services is the right destination for the customers who are searching for the best Web Development services in <strong>USA, Dubai, Australia</strong> and  in many other countries.</p>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default AboutUs
