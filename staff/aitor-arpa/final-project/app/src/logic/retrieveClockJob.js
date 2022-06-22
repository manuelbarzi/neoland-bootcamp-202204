import Apium from "apium"
const { isJwtValid, validateId } = require('validator')

function retrieveClockJob(token, jobId) {

    isJwtValid(token)
    validateId(jobId)

    const api = new Apium(process.env.REACT_APP_API_URL)

    return api.get('clock/job', {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ jobId })
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

export default retrieveClockJob