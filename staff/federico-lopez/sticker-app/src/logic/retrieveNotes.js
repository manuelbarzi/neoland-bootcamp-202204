function retrieveNotes() {
    return notes.filter(user => user.username === sessionStorage.username)
}