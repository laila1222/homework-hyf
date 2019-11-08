import React from 'react';

export default function SearchInput ({className, name, ref, placeholder}) {
    
        return (
            <input 
            className={className}
            type="text"
            name={name}
            ref={ref}
            placeholder={placeholder}
            />
        )

} 

