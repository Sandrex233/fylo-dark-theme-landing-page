import React from 'react'

import './signin.css'

const Signin = () => {
    return (
        <div className='fylo__signin'>
            <div className="fylo__signin-text">
                <h1>Get early access today</h1>
                <p>it only takes a minute to sign up and our free starter tier is extremely generous. If uoi have any <br />
                    questions, our support team would be happy to help you.
                </p>
            </div>
            <div className="fylo__signin-form">
                <input type="text" />
                <button>Get Started For Free</button>
            </div>
        </div>
    )
}

export default Signin