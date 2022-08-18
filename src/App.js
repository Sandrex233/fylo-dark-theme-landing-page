import React from 'react'

import { Features, Footer, Testimonial, Team, StayProductive } from './containers';
import { CTA, Signin, Navbar } from './components';

import './App.css';


const App = () => {
    return (
        <div>
            <div>
                <Navbar />
                <Testimonial />
            </div>
            <CTA />
            <Features />
            <StayProductive />
            <Team />
            <Signin />
            <Footer />
        </div>
    )
}

export default App