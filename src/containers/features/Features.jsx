import React from 'react'

import anywhere from './../../assets/images/icon-access-anywhere.svg'
import security from './../../assets/images/icon-security.svg'
import collaboration from './../../assets/images/icon-collaboration.svg'
import anyfiles from './../../assets/images/icon-any-file.svg'

import './features.css'

const Features = () => {
    return (
        <div className='fylo__features-container'>
            <div className="fylo__features_anywhere">
                <img src={anywhere} alt="" />
                <h1>Access your files, anywhere</h1>
                <p>The ability to use a smartphone, tablet, or computer <br />
                    to access your account means your files follow you <br />
                    everywhere.
                </p>
            </div>
            <div className="fylo__features_security">
                <img src={security} alt="" />
                <h1>Security you can trust</h1>
                <p>2-factor authentication and user-controlled encryption are <br />
                    just a couple of the security features we allow to help <br />
                    secure files.
                </p>
            </div>
            <div className="fylo__features_collaboration">
                <img src={collaboration} alt="" />
                <h1>Real-time collaboration</h1>
                <p>Securely share files and folders with friends, family and <br />
                    colleagues for live collaboration. No email attachments <br />
                    required.
                </p>
            </div>
            <div className="fylo__features_anyfiles">
                <img src={anyfiles} alt="" />
                <h1>Store any type of file</h1>
                <p>Whether you're sharing holidays photos or work <br />
                    documents, Fylo has you covered allowing for all file <br />
                    types to be securely stored and shared .
                </p>
            </div>
        </div>
    )
}

export default Features