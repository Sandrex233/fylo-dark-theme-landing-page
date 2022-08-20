import React from 'react'
import { RiFacebookCircleLine, RiInstagramLine } from 'react-icons/ri'
import { TiSocialTwitterCircular } from 'react-icons/ti'

import logo from './../../assets/images/logo.svg'
import location from './../../assets/images/icon-location.svg'
import phone from './../../assets/images/icon-phone.svg'
import email from './../../assets/images/icon-email.svg'

import './footer.css'

const Footer = () => {
    return (
        <div className='fylo__footer'>
            <div className="fylo__footer-container">
                <img src={logo} className="footer-logo" />
                <div className="fylo__footer-location">
                    <img src={location} alt="location" />
                    <p>Lorem ipsum dolor sit amet, consectetur <br />
                        adipiscing elit, sed do eiusmod tempor <br />
                        incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
                <div className="fylo__footer-phone">
                    <div className="fylo__footer-phone_box">
                        <img src={phone} alt="phone" />
                        <p>+1-543-123-4567</p>
                    </div>
                    <div className="fylo__footer-email_box">
                        <img src={email} alt="email" />
                        <p>example@fylo.com</p>
                    </div>
                </div>
                <div className="fylo__footer-aboutus">
                    <p>About Us</p>
                    <p>Jobs</p>
                    <p>Press</p>
                    <p>Blog</p>
                </div>
                <div className="fylo__footer-contactus">
                    <p>Contact Us</p>
                    <p>Terms</p>
                    <p>Privacy</p>
                    <p><br /></p>
                </div>
                <div className="fylo__footer-social"

                >
                    <RiFacebookCircleLine
                        size="40px"
                        className="fylo__footer-facebook"
                        onMouseOver={({ target }) => target.style.color = "hsl(176, 68%, 64%)"}
                        onMouseOut={({ target }) => target.style.color = "#cecece"} />
                    <TiSocialTwitterCircular
                        size="40px"
                        className="fylo__footer-twitter"
                        onMouseOver={({ target }) => target.style.color = "hsl(176, 68%, 64%)"}
                        onMouseOut={({ target }) => target.style.color = "#cecece"} />
                    <RiInstagramLine
                        size="40px"
                        className="fylo__footer-instagram"
                        onMouseOver={({ target }) => target.style.color = "hsl(176, 68%, 64%)"}
                        onMouseOut={({ target }) => target.style.color = "#cecece"} />
                </div>
            </div>
        </div>
    )
}

export default Footer