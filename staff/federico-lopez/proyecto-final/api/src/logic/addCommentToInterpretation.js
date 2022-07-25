const { User, Artist, Song, Comment } = require('../models')
const { NotFoundError, ConflictError } = require('errors')
const { validateStringNotEmptyOrBlank } = require('validators')
const { validateObjectId } = require('../validators')
const { Types: { ObjectId } } = require('mongoose')

module.exports = async (userId, interpretationId, text) => {
    validateObjectId(userId)
    validateObjectId(interpretationId)
    validateStringNotEmptyOrBlank(text, 'comment') 

    const userFounded = await User.findById(userId)

    if (!userFounded) throw new NotFoundError(`user with id ${userId} not found`)

    const songFounded = await Song.findOne({ "interpretations._id": ObjectId(interpretationId) })

    if (!songFounded) throw new NotFoundError(`interpretation with id ${interpretationId} not found`)

    const artistFounded = await Artist.findById(songFounded.artist)

    if (!artistFounded) throw new ConflictError(`artists from song with id ${songId} does not exist`)

    const interpretation = songFounded.interpretations.find(interpretation => interpretation._id.toString() === interpretationId)

    const comment = new Comment({ user: userId, text})

    interpretation.comments.push(comment)

    await songFounded.save()

    return comment._id.toString()
}