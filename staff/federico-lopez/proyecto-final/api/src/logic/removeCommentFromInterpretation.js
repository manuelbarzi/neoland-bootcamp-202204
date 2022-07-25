const { User, Song, Artist } = require('../models')
const { NotFoundError, ConflictError } = require('errors')
const { validateObjectId } = require('../validators')
const { Types: { ObjectId } } = require('mongoose')

module.exports = async (userId, interpretationId, commentId) => {
    validateObjectId(userId)
    validateObjectId(interpretationId)
    validateObjectId(commentId)

    const userFounded = await User.findById(userId)

    if (!userFounded) throw new NotFoundError(`user with id ${userId} not found`)

    const songFounded = await Song.findOne({ 'interpretations._id': ObjectId(interpretationId) })

    if (!songFounded) throw new NotFoundError(`interpretation with id ${interpretationId} not found`)

    const artistFounded = await Artist.findById(songFounded.artist)

    if (!artistFounded) throw new ConflictError(`artists from song with id ${songId} does not exist`)

    const interpretation = songFounded.interpretations.find(interpretation => interpretation._id.toString() === interpretationId)

    const commentIndex = interpretation.comments.findIndex(comment => comment._id.toString() === commentId)

    if(commentIndex === -1) throw new NotFoundError(`comment with id ${commentId} not found`)

    if(interpretation.comments[commentIndex].user.toString() !== userId) throw new ConflictError(`comment with id ${commentId} does not belong to user with id ${userId}`)
    
    interpretation.comments.splice(commentIndex, 1)

    await songFounded.save()
}