import React from 'react';
import Nav from '../components/Nav';

const Member = () => {
    return (
        <div>
            <Nav />
            <h1 className='text-center text-4xl sm:text-5xl lg:text-6xl mb-8 text-gray-700'>Keanggotaan <span className='block'> Bina Darma Cyber Army</span></h1>
            <h5 className='text-blue-500 text-2xl sm:text-3xl lg:text-4xl text-center'>Periode 2022</h5>
        </div>
    );
}

export default Member;
