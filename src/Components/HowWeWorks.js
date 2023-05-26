import React from 'react'
import Img1 from '../Images/62d1b04ba6695c5063945e06_Mask group-min (1).png'
import Img2 from '../Images/62d1b04ba6695c12c4945e07_Mask group-1.svg'
import Img3 from '../Images/62d1b04ba6695c5a22945e08_Mask group.svg'


function HowWeWorks() {
  return (
    <>
     <div className="how-it-works-section wf-section">
      <div data-w-id="4dfee203-99ab-c86a-8fe2-1e60aa14986a"   className="how-it-works-wrapper">
        <div className="how-it-works-header">
          <h2 className="how-it-works-heading">How we works</h2>
          <img src="/assets/Star Blue.svg" loading="lazy" alt="" className="how-it-works-element" />
          <div className="how-it-works-header-text">
            we believe in providing the best consultancy to our clients and
            helping them succeed in the digital world. Our process starts with
            a consultation where we discuss your individual needs and goals.
          </div>
        </div>
        <div className="how-it-works-content-wrap">
          <div className="how-it-works-left-contain">
            <img src={Img1} loading="lazy"
              sizes="(max-width: 767px) 90vw, (max-width: 991px) 500px, (max-width: 1439px) 48vw, 629px" alt=""
              className="how-it-works-image" /><img src={Img2}  loading="lazy"
              alt="" className="how-it-works-image absolute" /><img
              src={Img3} loading="lazy" alt=""
              className="how-it-works-image absolute" />
          </div>
          <div className="how-it-works-right-contain">
            <div className="how-it-works-point-wrap">
              <div className="how-it-works-point-contain">
                <h5 className="how-it-works-point-heading">BRANDING</h5>
                <div className="how-it-works-point-text">
                  We will help you to create your brand unique identity by
                  applying needed strategy. Brand should be like your unique
                  PIN.
                </div>
              </div>
            </div>
            <div className="how-it-works-point-wrap">
              <div className="how-it-works-point-contain">
                <h5 className="how-it-works-point-heading">CREATIVE</h5>
                <div className="how-it-works-point-text">
                  The more creative your brand are, the more customer
                  attraction you will get. We know your customers.
                </div>
              </div>
            </div>
            <div className="how-it-works-point-wrap">
              <div className="how-it-works-point-contain">
                <h5 className="how-it-works-point-heading">CONTENT</h5>
                <div className="how-it-works-point-text">
                  Content is the king of your brand and you cannot ignore. You
                  must have content strategy for your brand.
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