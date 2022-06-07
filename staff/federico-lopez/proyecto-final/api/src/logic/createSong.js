const { Song } = require('../models')
const { ConflictError } = require('../errors')
const { validateStringNotEmptyOrBlank } = require('../validators')

async function createSong(name, genre, country) {
    validateStringNotEmptyOrBlank(name)
    //TODO validate genre
    //TODO validate country

    // EVERYTHINGTO LOWERCASE????
    
    try {
        const { _id } = await Song.create({ name, genre, country })

        return _id.toString()

    } catch(error) {
        if (error.message.includes('duplicate key error'))
            throw new ConflictError(`Song ${name} already exists`)    
            
        throw error
    }
}

module.exports = createSong