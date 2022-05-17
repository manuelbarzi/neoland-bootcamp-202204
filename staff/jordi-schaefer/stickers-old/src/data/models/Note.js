function Note(username, text) {
    this.id = createId()
    this.username = username
    this.text = text
    this.date = new Date
}

function createId() {
    return Math.random().toString(36).substring(2) + Math.random().toString(36).substring(2)
}