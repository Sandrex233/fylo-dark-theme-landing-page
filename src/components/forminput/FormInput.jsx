import React, { useState } from 'react'
import './forminput.css'


const FormInput = (props) => {
    const [focused, setFocused] = useState(false);
    const { errorMessage, onChange, id, ...inputprops } = props

    const handleFocus = (e) => {
        setFocused(true)
    }

    return (
        <div className='formInput'>
            <input
                {...inputprops}
                onChange={onChange}
                onBlur={handleFocus}
                onFocus={() => inputprops.name === "confirmPassword" && setFocused(true)}
                focused={focused.toString()}
            />
            <span>{errorMessage}</span>
        </div>
    )
}

export default FormInput