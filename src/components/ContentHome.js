import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import teams from '../img/Teams.png'
const ContentHome = () => {
    return (
        <>
            <main className='p-3 block sm:flex'>
                <div className="">
                    <h1 className='text-blue-600 text-3xl'>Meet Our Team's</h1>
                    <p className='text-lg text-gray-500 sm:mr-3'>
                        Tim kita terdiri dari beberapa Mahasiswa Dari berbagai Progam Studi maupun Fakultas, kita bukan hacker hacker professional tetapi kita merupakan kumpulan mahasiswa yang haus akan ilmu dalam dunia Komputer, Tunggu apa lagi Join Sekarang juga besite
                    </p>
                    <div className='text-blue-500 border-2 border-blue-500 py-2 px-3 w-36 rounded-lg my-3 flex justify-around items-center'>
                        <span>Lihat galeri</span>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </div>
                </div>

                <img src={teams} alt="" className='w-4/5 mx-auto sm:w-2/5' />
            </main>
        </>
    );
}

export default ContentHome;
