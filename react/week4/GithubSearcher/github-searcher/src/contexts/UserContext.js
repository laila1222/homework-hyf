import React from 'react';

export default React.createContext ({
  userName: undefined,
  users: [],
  userId: '',
  userLogin: '',
  avatarUrl: '',
  userType: '',
  userScore: '',
  isLoading: true,
});
