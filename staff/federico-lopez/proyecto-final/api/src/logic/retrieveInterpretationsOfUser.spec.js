const { connect, disconnect, Types: { ObjectId } } = require('mongoose')
const { User, Artist, Song, Interpretation } = require('../models')
const { NotFoundError } = require('errors')
const retrieveInterpretationsOfUser = require('./retrieveInterpretationsOfUser')
const { expect } = require('chai')


describe('retrieveInterpretationsOfUser', () => {
    let user1, user2, user3, artist, song1, song2, interpretation1, interpretation2, interpretation3, interpretation4

    before(() => connect('mongodb://localhost:27017/pitch-us-test'))

    beforeEach(async () => {
        await Song.deleteMany()
        await Artist.deleteMany()
        await User.deleteMany()

        user1 = await User.create({ username: 'wendypan', email: 'wendypan@gmail.com', password: 'Passw0rd' })
        user2 = await User.create({ username: 'pepito', email: 'pepitogrillo@gmail.com', password: 'Passw0rd' })
        user3 = await User.create({ username: 'carlos', email: 'carlos@gmail.com', password: 'Passw0rd' })
        artist = await Artist.create({ name: 'La Renga', genres: [Artist.ROCK], country: 'AR' })

        const content = `E5
        Pobreza en los estómagos
              C5                    RIFF1
        Más pobreza en la cabeza
        E5                            C5          RIFF1
        No queda nada a salvo de este gran error
        E5
        El mundo sigue así
              C5                 RIFF1
        Tan terrible y abrumado
        E5                          C5               RIFF2
        Que sentirte a mi lado me hará mucho mejor`

        interpretation1 = new Interpretation({ user: user1._id, content })
        interpretation2 = new Interpretation({ user: user2._id, content })
        interpretation3 = new Interpretation({ user: user1._id, content })
        interpretation4 = new Interpretation({ user: user1._id, content })


        song1 = new Song({ artist: artist._id.toString(), name: 'A tu lado', genres: [Song.ROCK], album: 'Detonador de sueños', date: new Date(2003, 0), interpretations: [interpretation1, interpretation2, interpretation3] })
        song2 = new Song({ artist: artist._id.toString(), name: 'La razón que te demora', genres: [Song.ROCK], album: 'Detonador de sueños', date: new Date(2003, 0), interpretations: [interpretation4] })


        await song1.save()
        await song2.save()
    })

    it('succeed on existing user, artist, song and interpretations', async () => {
        const result = await retrieveInterpretationsOfUser(user1._id.toString())

        expect(result).to.be.instanceOf(Array)
        expect(result).to.have.lengthOf(3)

        result.forEach(interpretation => {
            expect(interpretation.user.id).to.equal(user1._id.toString())
            expect(interpretation.content).to.equal(interpretation1.content)
            expect(interpretation.songName).to.be.string
            expect(interpretation.artistName).to.be.string
            expect(interpretation.songId).to.be.string
            expect(interpretation.artistId).to.be.string

            const some = [interpretation1, interpretation3, interpretation4].some(elem => elem._id.toString() === interpretation.id)
            
            expect(some).to.be.true
        })
    })

    it('succeed on existing user with no interpretations', async () => {
        const result = await retrieveInterpretationsOfUser(user3._id.toString())

        expect(result).to.be.instanceOf(Array)
        expect(result).to.have.lengthOf(0)
    })

    it('fails on unexisting user', async () => {
        const wrongId = new ObjectId

        try {
            await retrieveInterpretationsOfUser(wrongId.toString())

            throw new Error('it should not reach this point')
        } catch (error) {
            expect(error).to.be.instanceOf(NotFoundError)
            expect(error.message).to.equal(`user with id ${wrongId.toString()} not found`)
        }
    })

    afterEach(async () => {
        await Song.deleteMany()
        await Artist.deleteMany()
        await User.deleteMany()
    })

    after(() => disconnect())
})