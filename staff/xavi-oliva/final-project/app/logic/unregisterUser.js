import Apium from 'apium'
import { validateJwt, validatePassword } from 'validators'

export async function unregisterUser(token, { password, repeatPassword }) {
    debugger
    validateJwt(token)
    validatePassword(password, 'password')
    validatePassword(repeatPassword, 'password repeat')

    if (password !== repeatPassword) throw new Error('password and password repeat do not match')

    const api = new Apium(process.env.REACT_APP_API_URL)

    const { payload, status } = await api.delete(
        'users',
        {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ password })
        })

    if (status === 204) return

    else if (status >= 400 && status < 500) {
        const data = JSON.parse(payload)

        throw new Error(data.error)
    }

    else if (status >= 500) throw new Error('server error')
}
