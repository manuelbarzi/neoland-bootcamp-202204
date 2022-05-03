function Note(username, text) {
    // debugger
    this.id = createId()
    this.username = username
    this.text = text
    this.date = new Date
}