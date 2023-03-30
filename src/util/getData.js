//this is my function to get all of the data from the API
const proxyServer = 'https://people.rit.edu/~dsbics/proxy/http://ist.rit.edu/api/';
//http://solace.ist.rit.edu/~dsbics/proxy/

//endpoint could be something else... 'about/', 'people/' etc
async function getData(endpoint) {
    return fetch(`${proxyServer}${endpoint}`)
        .then(response => response.json());
}

export default getData;

