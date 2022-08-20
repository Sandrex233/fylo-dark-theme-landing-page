import React from 'react'
import Arrow from './../../assets/images/icon-arrow.svg'
import StayProductiveImage from './../../assets/images/illustration-stay-productive.png'

import './stayproductive.css'


const StayProductive = () => {
    return (
        <div className='fylo__stayproductive'>
            <div className='fylo__stayproductive-image'>
                <img src={StayProductiveImage} alt="" />
            </div>
            <div className='fylo__stayproductive-container'>
                <h1>Stay Productive, <br />
                    wherever you are
                </h1>
                <p>Never let location be an issue when accessing you files. Fylo has you <br />
                    covered for all of your file storage needs. <br /> <br />
                    Securely share files and folders with friends, family and colleagues for live <br />
                    collaboration. No email attachments required.
                </p>
                <div className='fylo__stayproductive-link'>
                    <a href="/">See how Fylo works <img src={Arrow} className="stayproductive-arrow" /></a>
                </div>
            </div>
        </div>
    )
}

export default StayProductive