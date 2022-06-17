import Cookies from 'cookies'
import Apium from '../vendor/Apium'
import { validateJWT } from 'validators'
import { context } from '../logic'

export async function verifyTokenWithAPICall(req, res) {
    const cookies = new Cookies(req, res)

    const token = cookies.get('token')

    if (token) {
        validateJWT(token)

        const api = new Apium(context.API_URL)

        const { status, payload } = await api.get('users', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        if (status === 200) {
            if (req.url.includes('/login') || req.url.includes('/register')) {
                res.writeHead(307, { Location: '/home' })
                res.end()
            } else {
                return {
                    props: { token }
                }
            }
        } else {
            cookies.set('token')
            //TODO FEEDBACKS
            // if(status === 401) throw AuthError('wrong or timed out credentials')

            // else if (status >=400 && status < 500) throw new Error(data.error)

            // else if (status >= 500) throw new Error('server error')
        }
    }

    if (req.url.includes('/edit-profile') || req.url.includes('/create-interpretation')) {
        res.writeHead(307, { Location: '/login' })
        res.end()
    }

    return {
        props: {}
    }
}