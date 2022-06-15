import Cookies from 'cookies'
import { isValidJWT } from 'validators'

async function verifyTokenWithAPICall(req, res) {
    debugger
    const cookies = new Cookies(req, res)

    const token = cookies.get('token')

    try {
        isValidJWT(token)
        const response = await fetch('http://localhost:8080/api/users/auth', {
            method: 'GET',
            headers: {
                'Authorization': `bearer ${token}`
            }
        })

        if (response.status !== 200) {
            cookies.set('token')

            if (req.url === '/edit-profile' || req.url === '/create-interpretation') {
                res.writeHead(307, { Location: '/login' })
                res.end()
            }

            return {
                props: {}
            }

        } else if (req.url === '/login' || req.url === '/register') {
            res.writeHead(307, { Location: '/home' })
            res.end()
        }
    } catch (error) {

    }
    if(token) {
        return {
            props: { token }
        }
    } else {
        return {
            props: {}
        }
    }
}

module.exports = {
    verifyTokenWithAPICall
}