import { validateJWT } from '../validators'
import Apium from '../vendor/Apium'
import Note from '../data/Note'

export function retrieveNotes(token, callback) {
    validateJWT(token)
    
    const api = new Apium('http://b00tc4mp.herokuapp.com/api/v2')

    api.get(
        'users',
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        },
        (error, { status, payload }) => {
            if (error) return callback(error)

            const data = JSON.parse(payload)

            if (status >= 400 && status < 500)
                callback(new Error(data.error))

            else if (status >= 500)
                callback(new Error('server error'))

            if (status === 200) {
                if (data.notes) {
                    const notes = data.notes.map(note => new Note(note.username, note.text, new Date(note.date), note.id))
                    
                    callback(null, data.notes)
                } else callback(null, [])
            }
        }
    )
}