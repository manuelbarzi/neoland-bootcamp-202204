import Apium from "apium"
const { validateStringNotEmptyOrBlank,isJwtValid } = require('validator')

function addJob(token, title,description,addres,workers) {
    isJwtValid(token)
    validateStringNotEmptyOrBlank(description)
    validateStringNotEmptyOrBlank(title)
    validateStringNotEmptyOrBlank(addres)

    const api = new Apium(process.env.REACT_APP_API_URL)

    return api.post('job', {
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title,description,addres,workers})
    })
        .then(({ status, payload }) => {
            if (status === 200) {
                const data = JSON.parse(payload)

                return data.token
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

export default addJob