const ROOT_URL =
  'https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw';

// const ENDPOINTS = {
//   USERS: "/users?_limit=10",
//   POSTS: "/posts?_limit=10"
// };

// NOTE: you don't need await if returning (response.json() is async)
async function getTodos () {
  const response = await fetch (`${ROOT_URL}`);
  return response.json ();
}

// NOTE: you don't need await if returning (response.json() is async)
// async function getPosts() {
//   const response = await fetch(`${ROOT_URL}${ENDPOINTS.POSTS}`);
//   return response.json();
// }

export {getTodos};
