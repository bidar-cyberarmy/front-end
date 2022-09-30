import React from 'react';
import FormRegistration from '../components/FormRegistration';
const Registration = () => {
    return (
        <div className="bg-black min-h-screen p-3 px-5 max-h-fit">
            <div className='bg-white  mx-auto p-3 rounded-lg'>

                <h1 className='text-xl font-bold mb-5'>Registrasi Keanggotaan</h1>
                <FormRegistration />
            </div>
        </div>
    );
}

export default Registration;
