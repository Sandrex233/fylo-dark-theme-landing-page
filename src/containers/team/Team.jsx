import React from 'react'


import quotes from './../../assets/images/bg-quotes.png'
import profile1 from './../../assets/images/profile-1.jpg'
import profile2 from './../../assets/images/profile-2.jpg'
import profile3 from './../../assets/images/profile-3.jpg'

import './team.css'

const Team = () => {
    return (
        <div className="fylo__team">
            <div className="fylo__team-container">
                <div className="fylo__team-profile1">
                    <div className="fylo__team-quotes">
                        <img src={quotes} />
                    </div>
                    <p>Fylo has improved our team productivity by <br />
                        an order of magnitude. Since making the <br />
                        switch to our team has become a well-oiled <br />
                        collaboration machine.
                    </p>
                    <img src={profile1} alt="" />
                    <div className='fylo__team-profile1_text'>
                        <h4>Satish Patel</h4>
                        <h6>Founder & CEO, Huddle</h6>
                    </div>
                </div>
                <div className="fylo__team-profile2">
                    <p>Fylo has improved our team productivity by <br />
                        an order of magnitude. Since making the <br />
                        switch to our team has become a well-oiled <br />
                        collaboration machine.
                    </p>
                    <img src={profile2} alt="" />
                    <div className='fylo__team-profile2_text'>
                        <h4>Bruce McKenzie</h4>
                        <h6>Founder & CEO, Huddle</h6>
                    </div>
                </div>
                <div className="fylo__team-profile3">
                    <p>Fylo has improved our team productivity by <br />
                        an order of magnitude. Since making the <br />
                        switch to our team has become a well-oiled <br />
                        collaboration machine.
                    </p>
                    <img src={profile3} alt="" />
                    <div className='fylo__team-profile3_text'>
                        <h4>Iva Boyd</h4>
                        <h6>Founder & CEO, Huddle</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team