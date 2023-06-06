import React from 'react'
import Project_comp from '../Images/Projects Completed.png'
import Happy_client from '../Images/Happy Clients.png'
import Result from '../Images/result (1).png'

function DataMapping() {
  return (
    <>
      <div className='container-fluid'>
         
          <div className="tools-section wf-section">

            <div className="tools-header">
              <h3 className="features-tools-heading">Sparkling Brands: Grow Your Business with Unforgettable Impact!</h3>
              <p className="features-tools-header-text">Digital marketing is essential to define your brand values create a captivating website</p>
            </div>
            <div className="features-tools-grid">
              <div className="features-tools-grid-contain row">
                <div className="features-tools-grid-cell col-lg-4 col-md-6">
                  <div className='shadow py-5 px-3' >
                    <img 
                    width={140}
                      src={Project_comp}
                      loading="lazy" alt="" className="tools-grid-image" />
                    <h5 className="tools-grid-heading">100+ Projects Completed</h5>
                    <div className="tools-grid-text">till Now We Will Completed 100+ Projects</div>
                  </div>
                </div>
                <div className="features-tools-grid-cell col-lg-4 col-md-6">
                  <div className='shadow py-5 px-3' >
                    <img
                     width={140}
                      src={Happy_client}
                      loading="lazy" alt="" className="tools-grid-image" />
                    <h5 className="tools-grid-heading">90+ Happy Clients</h5>
                    <div className="tools-grid-text">Satisfied clients from various industries</div>
                  </div>
                </div>
                <div className="features-tools-grid-cell col-lg-4 col-md-6">
                  <div className='shadow py-5 px-3' >
                    <img
                    width={140}
                      src={Result}
                      loading="lazy" alt="" className="tools-grid-image" />
                    <h5 className="tools-grid-heading">55+ Amazing Result</h5>
                    <div className="tools-grid-text">Delivering amazing results</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      

    </>
  )
}

export default DataMapping