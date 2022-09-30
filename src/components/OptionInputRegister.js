import React from 'react';

const OptionInputRegister = (props) => {
    return (
        <div className="mb-3">
            <label className='text-sm block text-gray-700 mb-2' htmlFor="full_name">{props.label}</label>
            <select name="" id="" className='outline-2 
p-2 rounded-lg w-full outline outline-gray-300 focus:outline-gray-400' defaultValue={'DEFAULT'}>
                <option disabled selected value='DEFAULT'>{props.placeholder}</option>

                {props.value.map(function (val, i) {
                    return (
                        <option key={i} value="">{val.text}</option>
                    );
                })}
            </select>
        </div>
    );
}

export default OptionInputRegister;
