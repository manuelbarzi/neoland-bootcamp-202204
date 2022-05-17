import createId from '../../utils/createId'

function Note(id, text) {
    this.id = id || createId()
    this.text = text
    this.date = new Date()
}

export default Note