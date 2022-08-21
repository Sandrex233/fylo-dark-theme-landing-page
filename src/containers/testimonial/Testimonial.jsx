import React from 'react'
import Illustration from './../../assets/images/illustration-intro.png'
import background from './../../assets/images/bg-curvy-desktop.svg'
import backgroundMobile from './../../assets/images/bg-curvy-mobile.svg'

import './testimonial.css'

const Testimonial = () => {
    return (
        <div className='fylo__testimonial'>
            <div className='fylo__testimonial-image'>
                <div className='background-illustration'>
                    <img src={Illustration} />
                </div>
            </div>
            <div className='fylo__testimonial-background'>
                <div className="background-desktop">
                    <img src={background} />
                </div>
                <div className="background-mobile">
                    <img src={backgroundMobile} />
                </div>
            </div>
            <div className='fylo__testimonial-text'>
                <h1>All your file in one secure location, <br /> accessible anywhere.</h1>
                <p>Fylo stores all your most important files in one secure location. <br />
                    Access them whenever you need, share and collaborate with <br />
                    friends, family, and co-workers.
                </p>
            </div>
            <div className='fylo__testimonial-button'>
                <button>Get started</button>
            </div>
        </div >
    )
}

export default Testimonial