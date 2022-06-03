import Apium from "../vendor/Apium"

export default function updateUserName(token, name, callback) {
    const api = new Apium('http://localhost:8080/api')

    api.patch('users', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`  
        },
        body: JSON.stringify({ token, name })
    }, (error, response) => {
        if (error) return callback(error)
        const { status, payload } = response

        if (status >= 400 && status < 500) {
            const data = JSON.parse(payload)
            callback(new Error(data.error))

        } else if (status >= 500)
            callback(new Error('server error'))
        else if (status === 204) 
            callback(null)
    })
}
