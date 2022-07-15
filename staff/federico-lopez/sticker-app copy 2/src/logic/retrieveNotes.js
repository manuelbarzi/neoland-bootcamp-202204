function retrieveNotes(callback) {
    const retrievedNotes = db.notes.filter(user => user.username === sessionStorage.username)

    if(retrievedNotes.length === 0) {
        const error = new Error('there are no notes to list')
        callback(error)
        return
    }

    callback(null, retrievedNotes)
}