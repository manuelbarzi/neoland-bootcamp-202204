function Note(username,text){       //creamos el component de notes
    this.id = createId()
    this.username = username
    this.text = text
    this.date = new Date
}