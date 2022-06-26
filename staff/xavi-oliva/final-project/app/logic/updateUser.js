import { validateStringNotEmptyOrBlank, validateJwt, validateString } from 'validators'
import Apium from 'apium'

export async function updateUser(token, { name, surnames, phone }) {
    validateJwt(token)
    validateStringNotEmptyOrBlank(name, 'name')
    if (surnames != null) validateString(surnames, 'surnames')
    if (phone != null) validateString(phone, 'phone')

    const api = new Apium(process.env.REACT_APP_API_URL)

    const { status, payload } = await api.patch(
        'users',
        {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, surnames, phone })
        })

    if (status === 204) return

    else if (status >= 400 && status < 500) {
        const data = JSON.parse(payload)

        throw new Error(data.error)
    }

    else if (status >= 500) throw new Error('server error')
}