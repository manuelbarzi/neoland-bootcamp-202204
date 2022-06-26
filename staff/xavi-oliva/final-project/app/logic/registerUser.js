import { validateStringNotEmptyOrBlank, validateEmail, validatePassword } from 'validators'
import Apium from 'apium'



export async function registerUser(name, email, password) {
    validateStringNotEmptyOrBlank(name, 'name')
    validateEmail(email, 'email')
    validatePassword(password)

    const api = new Apium(process.env.REACT_APP_API_URL)

    const { status, payload } = await api.post(
        'users',
        {
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password })
        })

    if (status === 201) return

    else if (status >= 400 && status < 500) {
        const data = JSON.parse(payload)

        throw new Error(data.error)

    } else
        throw new Error('server error')
}