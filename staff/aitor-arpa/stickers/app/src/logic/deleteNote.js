import Apium from "../vendor/Appium"
function deleteNote(token, noteId, callback) {

      const api = new Apium('https://b00tc4mp.herokuapp.com/api')

    

    api.get('v2/users', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }, (error, response) => {
        if (error) return callback(error)

        

        const { status, payload } = response

        if (status >= 400 && status < 500) {
            const data = JSON.parse(payload)

            callback(new Error(data.error))
        } else if (status >= 500)
            callback(new Error('server error'))
        else if (status === 200) {
            const data = JSON.parse(payload)

            const { notes = [] } = data

            const index = notes.findIndex(note => note.id === noteId)

            if (index < 0)
                return callback(new Error(`note with id ${noteId} not found`))

            notes.splice(index, 1)


            api.patch('v2/users', {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ notes })
            }, (error, response) => {
                if (error) return callback(error)

               

                const { status, payload } = response

                if (status >= 400 && status < 500) {
                    const data = JSON.parse(payload)
        
                    callback(new Error(data.error))
                } else if (status >= 500)
                    callback(new Error('server error'))
                else if (status === 204) {
                    callback(null)
                }
            })
        }
    })
}
export default deleteNote