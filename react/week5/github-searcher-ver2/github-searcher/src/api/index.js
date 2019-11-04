const URL = 'https://api.github.com/search/users?q=';

async function fetchUser (userName) {
  let response;

  response = await fetch (`${URL}${userName}`);
  if (response.status === 200) {
    return await response.json ();
  } else {
    return await response.statusText;
  }

  // if (response.status === 200) {
  //     return await response.json();
  // } else {
  //     return await response.statusText;
  // }
}

export {fetchUser};
