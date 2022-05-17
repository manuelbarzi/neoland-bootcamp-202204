function noteIsSaved(token, id, callback) {
    const api = new Apium

    api.call(
        'GET',
        'http://b00tc4mp.herokuapp.com/api/v2/users',
        {
            headers: { Authorization: `Bearer ${token}` }
        },
        (error, { status, payload }) => {
            const data = JSON.parse(payload)

            if (status === 200) {
                if (data.notes) {
                    const stickerIsSaved = data.notes.some(note => note.id === id)

                    callback(null, stickerIsSaved)
                }
                } else if (status >= 400 && status < 500) {
                    callback(new Error(data.error))
                } else callback(new Error('server error'))
            }
        )
}