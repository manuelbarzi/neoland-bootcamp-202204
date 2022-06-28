import { validateJwt, validateStringNotEmptyOrBlank } from 'validators'
import Apium from 'apium'

export async function createFlat(token, { title, description, address, images }) {
    validateJwt(token)
    validateStringNotEmptyOrBlank(title, 'title')
    validateStringNotEmptyOrBlank(description, 'description')
    validateStringNotEmptyOrBlank(address, 'address')

    const api = new Apium(process.env.REACT_APP_API_URL)

    const { status, payload } = await api.post(
        'flats',
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ title, description, address, images })
        })

    const data = JSON.parse(payload)

    if (status === 201) return data.id

    else if (status >= 400 && status < 500) {

        throw new Error(data.error)

    } else
        throw new Error('server error')
}