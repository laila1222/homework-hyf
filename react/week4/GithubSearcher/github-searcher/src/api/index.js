const ROOT_URL = 'https://api.github.com/search';

const ENDPOINT = {
    USERS: '/users?q='
};

async function getUsers (userName) {
    const response = await fetch(`${ROOT_URL}${ENDPOINT.USERS}(userName)`);
    return response.json();
}

export { getUsers };