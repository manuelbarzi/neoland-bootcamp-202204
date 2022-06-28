import { validateEmail, validateJwt, validateString, validateStringNotEmptyNoSpaces, validateStringNotEmptyOrBlank } from 'validators'
import Apium from 'apium'

export async function createBooking(token, flatId, { name, phone, email, text, from, to }) {
    
    validateJwt(token)
    validateStringNotEmptyNoSpaces(flatId, 'flat id')
    validateStringNotEmptyOrBlank(name, 'name')
    if (phone != null)  validateString(phone, 'phone')
    if (email != null)  validateEmail(email, 'email')
    if (text != null)  validateString(text, 'text')
    validateString(from, 'from')
    validateString(to, 'to')

    const api = new Apium(process.env.REACT_APP_API_URL)

    const { status, payload } = await api.post(
        `flats/${flatId}/bookings`,
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ name, phone, email, text, from, to })
        })

    const data = JSON.parse(payload)

    if (status === 201) return data.id

    else if (status >= 400 && status < 500) {

        throw new Error(data.error)

    } else
        throw new Error('server error')
}