const Apium = require('./src/vendor/Apium')
const api = new Apium('https://accounts.spotify.com/api')

if (typeof XMLHttpRequest === 'undefined') {
    var XMLHttpRequest = require('xhr2');
  
    global.XMLHttpRequest = XMLHttpRequest
  }

  var request = require('request'); // "Request" library

const client_id = '01be562071714c9f9ac9cd1ba6909f69'; // Your client id
const client_secret = 'a0d11780446f4f7e94f5c602748537c1'; // Your secret

console.log('Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64')))

;(async () => {
    const { status, payload } = await api.post(
        'token',
        {
            headers: {
                Authorization: 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64')),
                'content-type': 'application/x-www-form-urlencoded'
            },
            body: 'grant_type=client_credentials'
        })

    debugger
    console.log(status, payload)
})()

// var authOptions = {
//     url: 'https://accounts.spotify.com/api/token',
//     headers: {
//         'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
//     },
//     form: {
//         grant_type: 'client_credentials'
//     },
//     json: true
// }

//     request.post(authOptions, async function (error, response, body) {
//     debugger
//     if (!error && response.statusCode === 200) {

//         // use the access token to access the Spotify Web API
//         var token = body.access_token
//         const { status, payload } = await api.get(
//             'https://api.spotify.com/v1/users/21vbjkvbzh4hmeaxuvzt66i4i',
//             {
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'Authorization': 'Bearer ' + token
//                 }
//             })
//         debugger
//         console.log(status, payload)

//         }
//     })


             
    


        // var options = {
        //     // url: 'https://api.spotify.com/v1/users/21vbjkvbzh4hmeaxuvzt66i4i',
        //     url: 'https://api.spotify.com/v1/users/carandini',
        //     headers: {
        //         'Authorization': 'Bearer ' + token
        //     },
        //     json: true
        // };
        // request.get(options, function (error, response, body) {
        //     console.log(body);
        // });


// ;(async function () {

//     your application requests authorization




//     const { status, payload } = await api.post(
//         '',
//         {
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
//             },
//             body: JSON.stringify({ grant_type: 'client_credentials', json: true })
//         })
        
//         debugger
//     if (status === 200) {
//         const token = body.access_token
//     }
// })()
