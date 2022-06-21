import Cookies from 'cookies'
import Apium from '../vendor/Apium'
import { context } from '../logic'

export async function verifyTokenWithAPICall(req, res) {
    debugger
    const cookies = new Cookies(req, res)

    const token = cookies.get('token')

    if (token) {
        const api = new Apium(context.API_URL)

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

            if (req.url.includes('/edit-profile') || req.url.includes('/create-interpretation') || req.url.includes('/change-password'))  {
                
                //TODO FEEDBACKS IN THIS CASES
                res.writeHead(307, { Location: '/login' })
                res.end()
            }
            //TODO FEEDBACKS
        }
    }

    if (req.url.includes('/edit-profile') || req.url.includes('/create-interpretation') || req.url.includes('/change-password'))  {
        res.writeHead(307, { Location: '/login' })
        res.end()
    }

    return 
}