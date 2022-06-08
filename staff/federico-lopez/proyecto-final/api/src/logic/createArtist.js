const { Artist, User } = require('../models')
const { ConflictError, NotFoundError } = require('../errors')
const { 
    validateStringNotEmptyOrBlank,
    validateCountryCode,
    validateGenres,
    validateObjectId
} = require('../validators')

async function createArtist(userId, name, genres, country) {
    validateObjectId(userId)
    validateStringNotEmptyOrBlank(name, 'artist name')
    validateGenres(genres)
    validateCountryCode(country)
    
    try {
        const user = await User.findById(userId)

        if(!user) throw NotFoundError(`user with id ${userId} not found`)
        
        const { _id } = await Artist.create({ name, genres, country })

        return { id: _id.toString() }

    } catch(error) {
        if (error.message.includes('duplicate key error'))
            throw new ConflictError(`artist ${name} already exists`)    
            
        throw error
    }
}

module.exports = createArtist