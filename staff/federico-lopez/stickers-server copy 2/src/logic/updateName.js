function updateName(token, newName, callback) {
    const api = new Apium

    api.call(
        'PATCH',
        'http://b00tc4mp.herokuapp.com/api/v2/users',
        {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: newName })
        },
        (error, { status, payload }) => {

            if (status >= 200 && status < 300)
                callback(null)

            else if (status >= 400 && status < 500) {
                const data = JSON.parse(payload)

                callback(new Error(data.error))
                
            } else {
                const data = JSON.parse(payload)
                callback(new Error('server error'))
            }
        }
    )
}