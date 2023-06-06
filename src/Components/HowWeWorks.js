import React from 'react'
import HowImg from '../Images/how-we-work.webp'


function HowWeWorks() {
  return (
    <>
      <div className="how-it-works-section wf-section py-md-5">
        <div data-w-id="4dfee203-99ab-c86a-8fe2-1e60aa14986a" className="how-it-works-wrapper">
          <div className="how-it-works-header">
            <h2 className="how-it-works-heading">How we works</h2>
            <div className="how-it-works-header-text">
              we believe in providing the best consultancy to our clients and
              helping them succeed in the digital world. Our process starts with
              a consultation where we discuss your individual needs and goals.
            </div>
          </div>
          <div className="how-it-works-content-wrap">
            <div className="how-it-works-left-contain">
              <img src={HowImg} loading="lazy"
                alt=""
                className="how-it-works-image" />
            </div>
            <div className="how-it-works-right-contain">
              <div className="how-it-works-point-wrap">
                <div className="how-it-works-point-contain">
                  <h5 className="how-it-works-point-heading">Understanding Client Needs</h5>
                  <div className="how-it-works-point-text">
                    We begin by thoroughly understanding the client's requirements, objectives, and vision for the project.
                  </div>
                </div>
              </div>
              <div className="how-it-works-point-wrap">
                <div className="how-it-works-point-contain">
                  <h5 className="how-it-works-point-heading">Planning and Strategy</h5>
                  <div className="how-it-works-point-text">
                    We devise a detailed plan and strategy to meet the client's goals, outlining the project timeline, deliverables, and resources required.
                  </div>
                </div>
              </div>
              <div className="how-it-works-point-wrap">
                <div className="how-it-works-point-contain">
                  <h5 className="how-it-works-point-heading">Client Satisfaction</h5>
                  <div className="how-it-works-point-text">
                    Our ultimate goal is to ensure client satisfaction by delivering exceptional results, meeting project objectives, and exceeding expectations.
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

export default HowWeWorks