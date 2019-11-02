import React from 'react';

export const states = {
  userName: undefined,
  users: [],
  isLoading: false,
  language: 'english',
  errorText: undefined
};

const ContextStates = React.createContext ({
  states: states,
});

export default ContextStates;
