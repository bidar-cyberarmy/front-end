import { TextField } from '@mui/material';
import React from 'react';

const InputRegister = (props) => {
    return (
        <div className="mb-3">
            <TextField name={props.name} type={props.type} label={props.label} variant={'filled'} className={"w-full"} />
        </div>
    );
}

export default InputRegister;
