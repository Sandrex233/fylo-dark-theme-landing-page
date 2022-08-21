import React, { useState } from 'react'

import FormInput from '../forminput/FormInput'

import './signin.css'

const Signin = () => {
    const [values, setValues] = useState({
        Email: ""
    });

    const inputs = [
        {
            id: 1,
            name: 'Email',
            type: 'email',
            placeholder: 'example@example.com',
            errorMessage: "Please enter a valid email address",
            required: true,
        },
    ]


    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }


    return (
        <div className='fylo__signin'>
            <div className="fylo__signin-text">
                <h1>Get early access today</h1>
                <p>it only takes a minute to sign up and our free starter tier is extremely generous. If uoi have any <br />
                    questions, our support team would be happy to help you.
                </p>
            </div>
            <div className="fylo__signin-form">
                <form onSubmit={handleSubmit}>
                    {inputs.map((input) => (
                        <FormInput
                            key={input.id}
                            {...input}
                            value={values[input.name]}
                            onChange={onChange} />
                    ))}

                    <button>Get Started For Free</button>

                </form>
            </div>
        </div>
    )
}

export default Signin