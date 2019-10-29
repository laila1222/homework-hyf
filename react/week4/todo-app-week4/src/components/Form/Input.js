import React from 'react';

export default function ({type, name, value, onChange, onClick, required}) {
    return (
        <input 
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            onClick={onClick}
            required={required}
        />
    )
}

