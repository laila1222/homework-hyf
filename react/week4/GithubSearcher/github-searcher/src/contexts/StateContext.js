import React from 'react';

export const states = {
  userName: undefined,
  users: [],
  isLoading: true,
  language: 'english',
};

const ContextStates = React.createContext ({
  states: states,
});

export default ContextStates;
