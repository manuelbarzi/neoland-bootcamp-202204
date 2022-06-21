import { validateJWT } from 'validators'
import { context } from '.'
import Apium from '../vendor/Apium'

export async function getTopArtists(token, access_token) {
    debugger
    validateJWT(token)
    // TODO VALIDATE ACCESS_TOKEN

    const api = new Apium(context.API_URL)

    const { status, payload } = await api.post(
        'artists/top',
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ access_token })
        })

    const data = JSON.parse(payload)

    if (status === 200) return data

    else if (status >= 400 && status < 500) {

        throw new Error(data.error)

    } else
        throw new Error('server error')
}