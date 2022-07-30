import { validateStringNotEmptyNoSpaces } from 'validators'
import Apium from '../vendor/Apium'

export async function retrieveInterpretationsOfUser(userId) {
    validateStringNotEmptyNoSpaces(userId)

    const api = new Apium(process.env.NEXT_PUBLIC_API_URL)

    const { status, payload } = await api.get(
        `users/${userId}/interpretations`)

    const data = JSON.parse(payload)

    if (status === 200) return data

    else if (status >= 400 && status < 500) throw new Error(data.error)

    else if (status >= 500) throw new Error('server error')
}