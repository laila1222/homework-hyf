const ROOT_URL = 'https://jsonplaceholder.typicode.com/users';

// const ENDPOINT = {
//   USERS: '',
// };

async function getUser () {
  const response = await fetch (`${ROOT_URL}`);
  return response.json();
}

export {getUser};