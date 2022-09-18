import React from 'react'
import './contact.css'

function contact() {
  return (
    <>
    {/* contact from container */}
    <h1 className='contact-title'>Contact Us</h1>
        <div className="contact-container">
       
        {/* info cart */}
            <div className="info-cart">
                    <h3>Contact info</h3>

                    <div className="contact-address">
                    
                    <h3><i className="bi bi-geo-alt-fill"></i> Location</h3>
                    <p>F Haque Tower, Level – 7, 107 Bir Uttam C.R. Datta Road, Dhaka – 1205</p>
                    </div>

                    <div className="contact-email">
                    <h3><i className="bi bi-envelope-fill"></i> Email</h3>
                    <p>btgwl@yahoo.com</p>
                    </div>

                    <div className="contact-phone">
                    <h3><i className="bi bi-telephone-outbound-fill"></i> Phone</h3>
                    <p>+8801767352490</p>
                    </div>
            </div>
            {/* contact form */}
            <div className="contact-form">
                <h3>Send us a Message</h3>
                <div className="contact-name-input">
                    <input type="text" placeholder='Your full name'/>
                </div>
                <div className="contact-emain-input">
                    <input type="email" placeholder='Your email' />
                </div>
                <div className="contact-emain-input">
                    <input type="phone" placeholder='Your phone number (optional)' />
                </div>
                    <div className="contact-sub-input">
                        <input type="text" placeholder='Your subject'/>
                    </div>
                <div className="contact-message-input">
                    <textarea  placeholder='Your message' rows='4' cols='50'/>
                </div>
                <button type='submit'>Send message</button>
                    
 
            </div>

        </div>
    </>
  )
}

export default contact