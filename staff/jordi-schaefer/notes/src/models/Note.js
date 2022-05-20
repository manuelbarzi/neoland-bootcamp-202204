const { validateStringNotEmptyOrBlank, validateString, validateDate } = require('../validators')

function Note(id = createId(), userId, text, date = new Date) {
    validateStringNotEmptyOrBlank(id, 'note id')
    validateStringNotEmptyOrBlank(userId, 'user id')
    validateString(text, 'text')
    validateDate(date)

    this.id = id
    this.userId = userId
    this.text = text
    this.date = date
}

module.exports = Note