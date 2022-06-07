const { Artist } = require('../models')
const { ConflictError } = require('../errors')
const { validateStringNotEmptyOrBlank, validateCountryCode, validateGenres } = require('../validators')

async function createArtist(name, genres, country) {
    validateStringNotEmptyOrBlank(name)
    validateGenres(genres)
    validateCountryCode(country)

    // TODO EVERYTHING TO LOWERCASE????
    
    try {
        const { _id } = await Artist.create({ name, genres, country })

        return _id.toString()

    } catch(error) {
        if (error.message.includes('duplicate key error'))
            throw new ConflictError(`artist ${name} already exists`)    
            
        throw error
    }
}

module.exports = createArtist