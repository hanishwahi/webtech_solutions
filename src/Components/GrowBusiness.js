import React from 'react'
import Project_comp from '../Images/project_comp.png'
import Happy_client from '../Images/happy_clients.png'
import Result from '../Images/results__2_.png'

function DataMapping() {
  return (
     <>
     <div className="tools-section wf-section">
     
        <div className="tools-header">
          <h3 className="features-tools-heading">Sparkling Brands: Grow Your Business with Unforgettable Impact!</h3>
          <div className="features-tools-header-text">Digital marketing is essential to define your brand values create a captivating website</div>
        </div>
        <div className="features-tools-grid">
          <div className="features-tools-grid-contain">
            <div className="features-tools-grid-cell shadow">
              <img
                src={Project_comp}
                loading="lazy" alt="" className="tools-grid-image"/>
              <h5 className="tools-grid-heading">100+ Projects Completed</h5>
              <div className="tools-grid-text">till Now We Will Completed 100+ Projects</div>
            </div>
            <div className="features-tools-grid-cell shadow">
              <img
                src={Happy_client}
                loading="lazy" alt="" className="tools-grid-image"/>
              <h5 className="tools-grid-heading">90+ Happy Clients</h5>
              <div className="tools-grid-text">Satisfied clients from various industries</div>
            </div>
            <div className="features-tools-grid-cell shadow">
              <img
                src={Result}
                loading="lazy" alt="" className="tools-grid-image"/>
              <h5 className="tools-grid-heading">55+ Amazing Result</h5>
              <div className="tools-grid-text">Delivering amazing results</div>
            </div>
          </div>
        </div>
      </div>
   
     </>
  )
}

export default DataMapping