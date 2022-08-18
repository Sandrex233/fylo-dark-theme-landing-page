import React from 'react'

import { Features, Footer, Testimonial, Team, StayProductive } from './containers';
import { Signin, Navbar } from './components';

import './App.css';


const App = () => {
    return (
        <div>
            <div className='fylo__header'>
                <Navbar />
                <Testimonial />
            </div>
            <Features />
            <StayProductive />
            <Team />
            <Signin />
            <Footer />
        </div>
    )
}

export default App