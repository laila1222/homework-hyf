import React from 'react';

export const states = {
    users: [],
    isLoading: false,
};

const StateContext = React.createContext({
    states
});

export default StateContext;