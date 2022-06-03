import Apium from '../vendor/Apium'


function registerUser(name, username, password) {

    const api = new Apium('http://localhost:8080/api')

    return api.post('users/auth', {
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, username, password })
    })
        .then(({status, payload}) => {
            if (status === 201) {
                return 
            } else if (status >= 400 && status < 500) {
                const data = JSON.parse(payload)

                throw new Error(data.error)
            } else {
                throw new Error('server error')
            }
        })
    
}

export default registerUser;











// import Apium from '../vendor/Apium'


// function registerUser(name, username, password, callback) {

//     const api = new Apium

//     const url = 'http://localhost:8080/api/users'

//     api.call('POST', url, {
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ name, username, password })
//     }, (error, response) => {
//         if(error) {
//             callback(error)
//             return
//         }
//         const { status, payload } = response
//         if(status === 201) {
//             callback(null)
//         }else if (status >= 400 && status < 500) {       
//                 const data = JSON.parse(payload)
    
//                 callback(new Error(data.error))
//             }  else callback(new Error('server error'))
//     })
// }

// export default registerUser;