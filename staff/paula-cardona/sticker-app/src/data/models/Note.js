import createId from "../../utils/createId"

function Note(id,text){       //creamos el component de notes
    this.id = id || createId()
    this.text = text
    this.date = new Date
}

export default Note