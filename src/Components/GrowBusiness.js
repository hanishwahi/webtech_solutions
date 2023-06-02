import React from 'react'
import Project_comp from '../Images/project_comp.png'
import Happy_client from '../Images/happy_clients.png'
import Result from '../Images/results__2_.png'

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
                      src={Project_comp}
                      loading="lazy" alt="" className="tools-grid-image" />
                    <h5 className="tools-grid-heading">100+ Projects Completed</h5>
                    <div className="tools-grid-text">till Now We Will Completed 100+ Projects</div>
                  </div>
                </div>
                <div className="features-tools-grid-cell col-lg-4 col-md-6">
                  <div className='shadow py-5 px-3' >
                    <img
                      src={Happy_client}
                      loading="lazy" alt="" className="tools-grid-image" />
                    <h5 className="tools-grid-heading">90+ Happy Clients</h5>
                    <div className="tools-grid-text">Satisfied clients from various industries</div>
                  </div>
                </div>
                <div className="features-tools-grid-cell col-lg-4 col-md-6">
                  <div className='shadow py-5 px-3' >
                    <img
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