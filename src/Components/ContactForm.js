import React from 'react'
function ContactForm() {

  const submitData = ((e) => {
    e.preventDefault();
  })
  return (
    <>

      <div className="contact-hero-section wf-section" id="CONTACT">
        <div className="home-hero-wrapper2">
         
          
          <div className='row'>
            <div className="home-hero-header align-self-center">
            <h1 data-w-id="b3f9c3ce-27d6-c5d4-fcad-2662440c4edb" className="home-hero-heading">
            Get in touch
          </h1>
              <div data-w-id="fbc19c8e-292c-80bc-c002-20fb48dcf512" className="home-hero-text">
                Our support team is here and ready to assist you with any issue
                you might experience while using WebTechSolutions.
              </div>
            </div>
          </div>
          <div className='row justify-content-center'>
            <div className="form-block w-form col-lg-7 col-sm-10 col-md-9">
              <form id="wf-form-Contact-Form" name="wf-form-Contact-Form" data-name="Contact Form" method="get" className="form"
                aria-label="Contact Form">
                <div className="contact-flex-wrapper">
                  <div className="contact-fields-wrapper">
                    <label htmlFor="name" className="contact-field-label">Name</label><input type="text"
                      className="contact-text-field w-input" maxLength="256" name="name" data-name="Name"
                      placeholder="John Smith" id="name" required="" />
                  </div>
                  <div className="contact-fields-wrapper">
                    <label htmlFor="Email-Address" className="contact-field-label"> *Email Id</label><input type="email"
                      className="contact-text-field w-input" maxLength="256" name="Email-Address" data-name="Email Address"
                      placeholder="abc@example.com" id="Email-Address" required="" />
                  </div>
                </div>
                <div className="contact-flex-wrapper">
                  <div className="contact-fields-wrapper">
                    <label htmlFor="Company-Name" className="contact-field-label">Company Name</label><input type="text"
                      className="contact-text-field w-input" maxLength="256" name="Company-Name" data-name="Company Name"
                      placeholder="M-Tech" id="Company-Name" />
                  </div>
                  <div className="contact-fields-wrapper">
                    <label htmlFor="Phone-Number" className="contact-field-label">*Mobile Number</label><input type="tel"
                      className="contact-text-field w-input" maxLength="256" name="Phone-Number" data-name="Phone Number"
                      placeholder="+01 012 345 6789" id="Phone-Number" />
                  </div>
                </div>
                <div className="contact-flex-wrapper">
                  <div className="contact-fields-wrapper">
                    <label htmlFor="Message" className="contact-field-label">Your Message</label><textarea
                      placeholder="Enter your message here " maxLength="5000" id="Message" name="Message" data-name="field"
                      className="contact-text-field message w-input" spellCheck="false"></textarea>
                  </div>
                </div>
                <input onClick={submitData}  type="submit" value="Send message" data-wait="Please wait..."
                  className="contact-submit-button w-button" />


              </form>
              <div className="success-message w-form-done" tabIndex="-1" role="region" aria-label="Contact Form success">
                <div>Thank you! Your submission has been received!</div>
              </div>
              <div className="error-message w-form-fail" tabIndex="-1" role="region" aria-label="Contact Form failure">
                <div>Oops! Something went wrong while submitting the form.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactForm