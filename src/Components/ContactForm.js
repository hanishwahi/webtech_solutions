import React from 'react'
 function ContactForm() {
  return (
     <>
     
     <div className="contact-hero-section wf-section" id="CONTACT">
      <div className="home-hero-wrapper2">
        <img src="https://assets.website-files.com/62d1b04ba6695c538e945d71/62d1b04ba6695cab5c945db8_Vector.svg"
          loading="lazy" data-w-id="c2965c99-6bec-05d8-23bf-9ad7f70fa6ef" alt="" className="home-hero-element" /><img
          src="https://assets.website-files.com/62d1b04ba6695c538e945d71/62d1b04ba6695cdb9c945dbb_Hero%20Shape%20Stars.png"
          loading="lazy" data-w-id="311abaf7-3394-90d0-d3e1-453b181c794c" alt="" className="home-hero-element _3" />
        <div className="home-hero-header">
          <h1 data-w-id="b3f9c3ce-27d6-c5d4-fcad-2662440c4edb" className="home-hero-heading">
            Get in touch
          </h1>
          <div data-w-id="fbc19c8e-292c-80bc-c002-20fb48dcf512" className="home-hero-text">
            Our support team is here and ready to assist you with any issue
            you might experience while using WebTechSolutions.
          </div>
        </div>
        <div className="form-block w-form">
          <form id="wf-form-Contact-Form" name="wf-form-Contact-Form" data-name="Contact Form" method="get" className="form"
            aria-label="Contact Form">
            <div className="contact-flex-wrapper">
              <div className="contact-fields-wrapper">
                <label for="name" className="contact-field-label">Name</label><input type="text"
                  className="contact-text-field w-input" maxlength="256" name="name" data-name="Name"
                  placeholder="John Smith" id="name" required="" />
              </div>
              <div className="contact-fields-wrapper">
                <label for="Email-Address" className="contact-field-label">Your email</label><input type="email"
                  className="contact-text-field w-input" maxlength="256" name="Email-Address" data-name="Email Address"
                  placeholder="abc@example.com" id="Email-Address" required="" />
              </div>
            </div>
            <div className="contact-flex-wrapper">
              <div className="contact-fields-wrapper">
                <label for="Company-Name" className="contact-field-label">Company name</label><input type="text"
                  className="contact-text-field w-input" maxlength="256" name="Company-Name" data-name="Company Name"
                  placeholder="M-Tech" id="Company-Name" />
              </div>
              <div className="contact-fields-wrapper">
                <label for="Phone-Number" className="contact-field-label">Mobile number</label><input type="tel"
                  className="contact-text-field w-input" maxlength="256" name="Phone-Number" data-name="Phone Number"
                  placeholder="+01 012 345 6789" id="Phone-Number" />
              </div>
            </div>
            <div className="contact-flex-wrapper">
              <div className="contact-fields-wrapper">
                <label for="Message" className="contact-field-label">Your message</label><textarea
                  placeholder="Enter your message here " maxlength="5000" id="Message" name="Message" data-name="field"
                  className="contact-text-field message w-input" spellcheck="false"></textarea>
              </div>
            </div>
            <input type="submit" value="Send message" data-wait="Please wait..."
              className="contact-submit-button w-button" />
          </form>
          <div className="success-message w-form-done" tabindex="-1" role="region" aria-label="Contact Form success">
            <div>Thank you! Your submission has been received!</div>
          </div>
          <div className="error-message w-form-fail" tabindex="-1" role="region" aria-label="Contact Form failure">
            <div>Oops! Something went wrong while submitting the form.</div>
          </div>
        </div>
      </div>
    </div>
     </>
  )
}

export default ContactForm