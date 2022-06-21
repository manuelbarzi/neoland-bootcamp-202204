import Apium from "apium"
const { isJwtValid } = require('validator')

function retrieveUser(token) {

    isJwtValid(token)


    const api = new Apium(process.env.REACT_APP_API_URL)

    return api.get('users', {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        },

    })
        .then(({ status, payload }) => {
            if (status === 200) {
                const data = JSON.parse(payload)

                return data
            } else if (status >= 400 && status < 500) {

                const data = JSON.parse(payload)

                if (status === 401)
                    throw new Error(data.error)

                throw new Error(data.error)
            } else {

                throw new Error('server error')
            }
        })
}

export default retrieveUser