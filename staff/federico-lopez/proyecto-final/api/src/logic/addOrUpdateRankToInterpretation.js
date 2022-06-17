const { User, Artist, Song, Rank } = require('../models')
const { NotFoundError, ConflictError } = require('errors')
const { validateRank } = require('validators')
const { validateObjectId } = require('../validators')

module.exports = async (userId, songId, interpretationId, rankAmount) => {
    validateObjectId(userId)
    validateObjectId(songId)
    validateObjectId(interpretationId)
    validateRank(rankAmount)

    const userFounded = await User.findById(user)

    if (!userFounded) throw new NotFoundError(`user with id ${user} not found`)

    const songFounded = await Song.findById(song)

    if (!songFounded) throw new NotFoundError(`song with id ${song} not found`)

    const artistFounded = await Artist.findById(songFounded.artist)

    if (!artistFounded) throw new ConflictError(`artists from song with id ${song} does not exist`)

    const indexOfInterpretation = songFounded.interpretations.indexOf(interpretation => interpretation._id.toString() === intepretationId)

    if (indexOfInterpretation === -1) throw NotFoundError(`interpretation with id ${interpretationId} not found`)

    const indexOfRank = songFounded.interpretations[indexOfInterpretation].rank.indexOf(rank => rank.user.toString() === userId)

    if (indexOfRank !== -1) {
        if (songFounded.interpretations[indexOfInterpretation].rank[indexOfRank].amount === rankAmount) return

        songFounded.interpretations[indexOfInterpretation].rank.splice(indexOfRank, 1)
    }

    const rank = new Rank({ user: userId, amount: rankAmount })

    songFounded.interpretations[indexOfInterpretation].rank.push(rank)

    await songFounded.save()
}