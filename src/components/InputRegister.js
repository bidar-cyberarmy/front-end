import React from 'react';

const InputRegister = (props) => {
    return (
        <div className="mb-3">
            <label className='text-sm block text-gray-700 mb-2' htmlFor="full_name">{props.label}</label>
            <input
                className='outline-2 
             p-2 rounded-lg w-full outline outline-gray-300 focus:outline-gray-400
            '
                type={props.type} placeholder={props.placeholder} required />
        </div>
    );
}

export default InputRegister;
