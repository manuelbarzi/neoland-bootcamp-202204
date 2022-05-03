function deleteNote(username, noteId, callback) {
	const userExists = db.users.some(user => user.username === username)

	if (!userExists) {
		callback(new Error(`username "${username}" does not exist`))

		return
	}

	const index = db.notes.findIndex(note => note.id === noteId)

	if (index < 0) {
		callback(new Error(`note with id "${noteId}" does not exist`))

		return
	}

	const note = db.notes[index]

	if (note.username !== username) {
		callback(new Error(`user "${username}" does not own note with id "${noteId}"`))

		return
	}

	db.notes.splice(index, 1)

	callback(null)
}