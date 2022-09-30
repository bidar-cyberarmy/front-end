import React from 'react';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import ContentHome from '../components/ContentHome';
const Home = () => {
    return (
        <div>
            <div className="bg-black">
                <Nav />
                <Hero />
            </div>
            <ContentHome />
        </div>
    );
}

export default Home;
