const ROOT_URL = 'https://api.github.com/search';

const ENDPOINT = {
  USERS: '/users?q=',
};

async function getUsers (username) {
  const response = await fetch (`${ROOT_URL}${ENDPOINT.USERS}${username}`);
  if (response.status === 200) {
    return await response.json ();
  } else {
    return response.statusText;
  }
}

export {getUsers};
