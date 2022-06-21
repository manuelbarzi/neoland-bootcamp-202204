const Apium = require('./src/vendor/Apium')
const api = new Apium('https://accounts.spotify.com/api/token')

if (typeof XMLHttpRequest === 'undefined') {
    var XMLHttpRequest = require('xhr2');
  
    global.XMLHttpRequest = XMLHttpRequest
  }

  var request = require('request'); // "Request" library



const client_id = '01be562071714c9f9ac9cd1ba6909f69'; // Your client id
const client_secret = 'a0d11780446f4f7e94f5c602748537c1'; // Your secret

var authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: {
        'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
    },
    form: {
        grant_type: 'client_credentials'
    },
    json: true
}

    request.post(authOptions, async function (error, response, body) {
    debugger
    if (!error && response.statusCode === 200) {

        // use the access token to access the Spotify Web API
        var token = body.access_token
        const { status, payload } = await api.get(
            'https://api.spotify.com/v1/tracks/2TpxZ7JUBn3uw46aR7qd6V',
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
            })
        debugger
        console.log(status, payload)

        }
    })