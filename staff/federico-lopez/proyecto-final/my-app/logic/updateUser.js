import { validateJWT, validateString, validateStringNotEmptyOrBlank } from '../validators'
import Apium from '../vendor/Apium'

export async function updateName(token, { firstName, lastName, dateOfBirth }) {
    validateJWT(token)
    if (firstName) validateStringNotEmptyOrBlank(firstName, 'first name')
    if (lastName) validateStringNotEmptyOrBlank(lastName, 'last name')

    //TODO validate Date

    const api = new Apium(context.API_URL)

    const { status, payload } = await api.patch(
        'users',
        {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: newName })
        })

    if (status === 204) return

    else if (status >= 400 && status < 500) {
        const data = JSON.parse(payload)

        throw new Error(data.error)
    }

    else if (status >= 500) throw new Error('server error')
}