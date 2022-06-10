const validateStringNotEmptyOrBlank = require('./validateStringNotEmptyOrBlank')
const { FormatError } = require('../errors')

module.exports = content => {
    validateStringNotEmptyOrBlank(content, 'interpretation content')

    if(content.length < 200) throw new FormatError(`interpretation content has less than 200 characters`)
}