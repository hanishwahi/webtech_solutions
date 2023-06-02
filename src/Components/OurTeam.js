import React from 'react'
import Gaurav from '../Images/gaurav.jpg'
import Ankit from '../Images/ankit.jpg'
import Hanish from '../Images/hanish.jpg'
import Param from '../Images/param.jpg'
import Shamse from '../Images/shamse.jpg'
import Nidhi from '../Images/nidhi.jpg'
 
function OurTeam() {
    return (
        <>
            <div className='container-fluid'>
                <div className='container'>
                    <div className='row  OurTeam-heading  py-5'>
                        <h5 className="mb-4">Introducing Our All-Star Squad: Unleashing Innovation and Excellence</h5>
                        <p>At Web Tech Solutions Services, we pride ourselves on the collective brilliance of our dedicated team. With a passion for innovation and a commitment to excellence, our diverse experts bring a wealth of experience to the table. From visionary leaders to creative minds, we collaborate seamlessly to deliver exceptional results. Trust us to surpass your expectations as we work tirelessly to achieve your goals.<br /><br /> Get to know the faces behind our success and experience the power of a united team that's driven by your success.
                        </p>
                    </div>

                     
                        <div class="row row-cols-1 row-cols-md-3 g-4 pb-5">
                            <div class="col">
                                <div class="card">
                                    <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp" class="card-img-top"
                                        alt="Hollywood Sign on The Hill" />
                                    <div class="card-body">
                                        <h5 class="card-title">Simarjit Kaur </h5>
                                        <p class="card-text">
                                            Senior HR Executive
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card">
                                    <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp" class="card-img-top"
                                        alt="Palm Springs Road" />
                                    <div class="card-body">
                                        <h5 class="card-title">Kuldeep Singh</h5>
                                        <p class="card-text">
                                            Sr. Digital Marketing Expert
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card">
                                    <img src={Hanish} class="card-img-top"
                                        alt="Los Angeles Skyscrapers" />
                                    <div class="card-body">
                                        <h5 class="card-title">Hanish Wahi</h5>
                                        <p class="card-text">React Developer</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card">
                                    <img src={Ankit} class="card-img-top"
                                        alt="Skyscrapers" />
                                    <div class="card-body">
                                        <h5 class="card-title">Ankit Kumar</h5>
                                        <p class="card-text">
                                            Online Marketing Expert
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card">
                                    <img src={Gaurav} class="card-img-top"
                                        alt="Skyscrapers" />
                                    <div class="card-body">
                                        <h5 class="card-title">Gaurav Sharma</h5>
                                        <p class="card-text">
                                            Online Marketing Executive
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card">
                                    <img src={Nidhi} class="card-img-top"
                                        alt="Skyscrapers" />
                                    <div class="card-body">
                                        <h5 class="card-title">Nidhi Jaswal</h5>
                                        <p class="card-text">
                                            SMO (Social Media Optimization)
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card">
                                    <img src={Param} class="card-img-top"
                                        alt="Skyscrapers" />
                                    <div class="card-body">
                                        <h5 class="card-title">Parampreet kaur</h5>
                                        <p class="card-text">
                                            SMM (Social Media Marketer)
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card">
                                    <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp" class="card-img-top"
                                        alt="Skyscrapers" />
                                    <div class="card-body">
                                        <h5 class="card-title">Anuj Thakur</h5>
                                        <p class="card-text">
                                            SEO Executive
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card">
                                    <img src={Shamse} class="card-img-top"
                                        alt="Skyscrapers" />
                                    <div class="card-body">
                                        <h5 class="card-title">Shamse Alam</h5>
                                        <p class="card-text">
                                            Wordpress Developer
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                 
            </div>




        </>
    )
}

export default OurTeam