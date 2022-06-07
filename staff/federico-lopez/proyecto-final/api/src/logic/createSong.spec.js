const { connect, disconnect } = require('mongoose')
const { Song, Artist } = require('../models')
const { ConflictError } = require('../errors')
const createSong = require('./createSong')
const { expect } = require('chai')

describe('createSong', () => {
    before(() => connect('mongodb://localhost:27017/pitch-us-test'))

    beforeEach(async () => {
        await Song.deleteMany()
        await Artist.deleteMany()
    })

    describe('on existing artist and song', async () => {
        const { _id: laRengaId } = await Artist.create({ name: 'La Renga', genre: 'rock', country: 'Argentina' })

        await Song.create({ name: 'A tu lado', artist: laRengaId.toString(), genre: 'rock', album: 'detonador de sueños', date: new Date(2003, 0) })

        it('succeeds on new song', async () => {
            const result = await createSong({ name: 'La razón que te demora', artist: laRengaId.toString(), genre: 'rock', album: 'detonador de sueños', date: new Date(2003, 0) })

            expect(result).to.be.string

            const createdSong = await Song.findById(result)

            expect(createdSong.name).to.equal('La razón que te demora')
            expect(createdSong.artist).to.equal(laRengaId)
            expect(createdSong.genre).to.equal('rock')
            expect(createdSong.album).to.equal('Detonador de sueños')
            expect(createdSong.interpretations).to.be.instanceOf(Array)
            expect(createdSong.interpretations).to.have.length(0)
        })

        it('fails when Song already exists', async () => {
            try {
                await createSong('La Renga', 'punk', 'Brasil')

            } catch (error) {
                expect(error).to.be.instanceOf(ConflictError)
                expect(error.message).to.equal(`Song La Renga already exists`)
            }
        })

    })
    afterEach(() => Song.deleteMany())

    after(() => disconnect())
})