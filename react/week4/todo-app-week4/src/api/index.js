const URL = 'https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw';

async function getTodos () {
    const response = await fetch (`${URL}`);
    return response.json();
}

export {getTodos};