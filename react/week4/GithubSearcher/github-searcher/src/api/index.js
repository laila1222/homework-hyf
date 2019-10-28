const ROOT_URL = 'https://api.github.com/search';

const ENDPOINT = {
    USERS: '/users?q='
};

async function getUsers (username) {
    try {
        const response = await fetch(`${ROOT_URL}${ENDPOINT.USERS}${username}`);
        console.log(response);
        return response.json(); 
    } catch (error) {
        console.error(error);
    }
          
         
}

export { getUsers };