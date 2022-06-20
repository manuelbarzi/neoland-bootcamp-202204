import Cookies from 'cookies'
import { validateJwt } from 'validators'
import Apium from 'apium'

export async function verifyTokenWithAPICall(req, res) {
    
    const cookies = new Cookies(req, res)

    const token = cookies.get('token')
    
    if (token) {
        validateJwt(token)
        const api = new Apium('http://localhost:8080/api')

        const { status, payload } = await api.get('users/auth', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        if (status === 200) {
            if (req.url.includes('/login') || req.url.includes('/register')) {
                res.writeHead(307, { Location: '/' })
                res.end()
            } else {
                return token
            }
        } else {
            cookies.set('token')
            //TODO FEEDBACKS
            // if(status === 401) throw AuthError('wrong or timed out credentials')

            // else if (status >=400 && status < 500) throw new Error(data.error)

            // else if (status >= 500) throw new Error('server error')
        }
    }

    if (req.url === '/' || req.url.includes('/flat') || req.url.includes('/profile')) {
        res.writeHead(307, { Location: '/login' })
        res.end()
    }

    return 
    
    // try {
    //     isValidJWT(token) // Por validate que lance un error
    //     const response = await fetch('http://localhost:8080/api/users/auth', {
    //         method: 'GET',
    //         headers: {
    //             'Authorization': `bearer ${token}`
    //         }
    //     })
    //     if (response.status !== 200) {
    //         cookies.set('token')

    //         if (req.url === '/' || req.url === '/flats' || req.url === '/profile') {
    //             res.writeHead(307, { Location: '/login' })
    //             res.end()
    //         }

    //         return {
    //             props: {}
    //         }

    //     } else if (req.url === '/login' || req.url === '/register') {
    //         res.writeHead(307, { Location: '/' })
    //         res.end()
    //     }
    // } catch (error) {
    //     if(req.url === '/' || req.url === '/flats' || req.url === '/profile') {
    //         res.writeHead(307, { Location: '/login' })
    //         res.end()
    //     }
    // }
    // if(token) {
    //     return {
    //         props: { token }
    //     }
    // } else {
    //     return {
    //         props: {}
    //     }
    // }
}