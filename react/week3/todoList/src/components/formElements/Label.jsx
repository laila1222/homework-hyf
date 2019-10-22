import React from 'react';

export default function Label ({ title, children }) {
    return (
        <label>
            {title}
            {children}
        </label>
    )
}