function Note(username, text) {
    this.id = createId()
    this.username = username
    this.text = text
    this.date = new Date
}