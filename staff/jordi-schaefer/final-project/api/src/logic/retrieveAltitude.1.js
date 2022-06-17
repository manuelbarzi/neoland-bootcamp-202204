const Apicaller = require('apicaller')

function retrieveAltitude(latitude, longitude) {  // recuperar

    const api = new Apicaller('https://api.open-elevation.com/api')

    return (async () => {
        
        const result = await api.get(`/v1/lookup?locations=${latitude},${longitude}`)

        const { status, payload } = result

        if (status === 200) {
            const data = JSON.parse(payload)
            const altitude = data.results[0].elevation
            return altitude
        } 
        else if (status >= 400 && status < 500) { 
            const data = JSON.parse(payload)  
            throw new Error(data.error) 
        }
        else { 
            throw new Error('server error')
        }
    })()
}

module.exports = retrieveAltitude



/*    
    const https = require('https')
    const url = `https://api.open-elevation.com/api/v1/lookup?locations=${latitude},${longitude}`
    https.get(url, res => {
    let data = '';
    res.on('data', chunk => {
        data += chunk;
    });
    res.on('end', () => {
        data = JSON.parse(data);
        console.log(data);
    })
    }).on('error', err => {
    console.log(err.message);
    }) 
*/



/* const fetch = require('node-fetch')

async function retrieveAltitude(latitude, longitude) {  // recuperar
        
    const options = {
        method: 'GET',
        headers: {'Content-Type': 'application/json',},
        body: JSON.stringify(update), };

    try {
        const result = await fetch(`https://api.open-elevation.com/api/v1/lookup?locations=${latitude},${longitude}`);
        if (!result.ok) {
            throw Error(result.status);
        }
        debugger;
        const data = JSON.parse(result);
        const altitude = data.results[0].elevation;
        return altitude;
    } catch (error) {
        console.log(error);
    }
}

module.exports = retrieveAltitude */