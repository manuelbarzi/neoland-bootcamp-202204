function deleteNote(username, text) {
    const indexNoteToDelete = db.notes.findIndex(note => note.text === text && note.username === username)

    db.notes.splice(indexNoteToDelete, 1)
}