import React from 'react';
import ContextStates from '../contexts/StateContext';

export default function ErrorText () {
    return (
        <ContextStates.Consumer >
            {({errorText}) => {
                return (
                    <div>There is an error: {errorText}</div>
                )
            }}
        </ContextStates.Consumer>
    )
}