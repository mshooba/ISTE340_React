//this is my function to get all of the data from the API
const proxyServer = 'https://people.rit.edu/~dsbics/proxy/http://ist.rit.edu/api/';
//http://solace.ist.rit.edu/~dsbics/proxy/

//endpoint could be something else... 'about/', 'people/' etc
async function getDataAsync(endpoint) {
    const response = await fetch(`${proxyServer}${endpoint}`);
    const data = await response.json();
    return Array.isArray(data) ? data : [data];
}

export default getDataAsync;

