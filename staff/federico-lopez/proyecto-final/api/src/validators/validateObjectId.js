const { isValidObjectId } = require('mongoose')

module.exports = (id, explain = 'id') => {
    if(!isValidObjectId(id)) throw new TypeError(`${explain} wrong`)
}