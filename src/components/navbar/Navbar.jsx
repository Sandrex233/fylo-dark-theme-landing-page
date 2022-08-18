import React from 'react'
import logo from './../../assets/images/logo.svg'

import './navbar.css'

const Navbar = () => {
    return (
        <div className='fylo__navbar'>
            <div className='fylo__navbar-links'>
                <div className='fylo__navbar-links_logo'>
                    <a href="/"><img src={logo} /></a>
                </div>
                <div className='fylo__navbar-links_container'>
                    <p><a href="#features">Features</a></p>
                    <p><a href="#team">Team</a></p>
                    <p><a href="#signin">Sign In</a></p>
                </div>
            </div>
        </div>
    )
}

export default Navbar