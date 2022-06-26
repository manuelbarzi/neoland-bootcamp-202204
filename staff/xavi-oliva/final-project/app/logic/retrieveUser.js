import { validateJwt } from 'validators'
import Apium from 'apium'

export async function retrieveUser(token) {
    validateJwt(token)

    const api = new Apium(process.env.REACT_APP_API_URL)

    const { status, payload } = await api.get(
        'users',
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

    const data = JSON.parse(payload)

    if (status === 200) return data

    else if (status >= 400 && status < 500) throw new Error(data.error)

    else if (status >= 500) throw new Error('server error')
}