import Cookies from 'cookies'
import { validateJWT } from 'validators'

async function verifyTokenWithAPICall(req, res) {
    const cookies = new Cookies(req, res)

    const token = cookies.get('token')

    if (token) {
        try {
            validateJWT(token)
            const response = await fetch('http://localhost:8080/api/users/auth', {
                method: 'GET',
                headers: {
                    'Authorization': `bearer ${token}`
                }
            })

            if (response.status !== 200) {
                cookies.set('token')

                if (req.url.includes('/edit-profile') || req.url.includes('/create-interpretation')) {
                    res.writeHead(307, { Location: '/login' })
                    res.end()
                }

                return {
                    props: {}
                }

            } else if (req.url.includes('/login') || req.url.includes('/register')) {
                res.writeHead(307, { Location: '/home' })
                res.end()
            } else {
                return {
                    props: { token }
                }
            }
        } catch (error) {
            if (req.url.includes('/edit-profile') || req.url.includes('/create-interpretation')) {
                res.writeHead(307, { Location: '/login' })
                res.end()
            }
        }
    } else {
        if (req.url.includes('/edit-profile') || req.url.includes('/create-interpretation')) {
            res.writeHead(307, { Location: '/login' })
            res.end()
        }
    }

    return {
        props: {}
    }
}

module.exports = {
    verifyTokenWithAPICall
}