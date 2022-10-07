import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react';

const OptionInputRegister = (props) => {
    return (
        <>
            <FormControl fullWidth style={{ 'marginBottom': '12px' }}>
                <InputLabel id={props.id}>{props.label}</InputLabel>
                <Select
                    labelId={props.id}
                    label={props.label} variant='filled'
                >
                    {
                        props.value.map(function (val, i) {
                            return (
                                <MenuItem key={i}>{val.text}</MenuItem>
                            )
                        })
                    }
                </Select>
            </FormControl>
        </>
    );
}

export default OptionInputRegister;
