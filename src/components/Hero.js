import React from 'react';
import { NavLink } from 'react-router-dom';

const Hero = () => {
    return (
        <>
            <div className="basenglah">
                <div className="landing_page mt-0">
                    <h1 className="glitch leading-none " >
                        <span aria-hidden="true">BINA DARMA CYBER ARMY</span>
                        BINA DARMA CYBER ARMY
                        <span aria-hidden="true">BINA DARMA CYBER ARMY</span>
                    </h1>
                    <div className="details">
                        <p>
                            Join a dynamically growing IT community and take your skills to the
                            next level through the most captivating, hands-on training
                            experience!
                        </p>
                    </div>
                    <div className="link-gabung">
                        <NavLink className="btn-gabung" to={'/registration'} >
                            Gabung Sekarang
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;
