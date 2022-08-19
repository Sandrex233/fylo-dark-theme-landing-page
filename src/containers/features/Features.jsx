import React from 'react'
import './features.css'

import anywhere from './../../assets/images/icon-access-anywhere.svg'
import security from './../../assets/images/icon-security.svg'
import collaboration from './../../assets/images/icon-collaboration.svg'
import anyfiles from './../../assets/images/icon-any-file.svg'

const Features = () => {
    return (
        <div className='fylo__features-container'>
            <div className="fylo__features_anywhere">
                <img src={anywhere} alt="" />
            </div>
            <div className="fylo__features_security">
                <img src={security} alt="" />
            </div>
            <div className="fylo__features_collaboration">
                <img src={collaboration} alt="" />
            </div>
            <div className="fylo__features_anyfiles">
                <img src={anyfiles} alt="" />
            </div>
        </div>
    )
}

export default Features