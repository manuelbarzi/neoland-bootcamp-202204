const { connect, disconnect, Types: { ObjectId } } = require('mongoose')
const { Song, Artist } = require('../models')
const retrieveSongsOfArtist = require('./retrieveSongsOfArtist')
const { expect } = require('chai')
const { NotFoundError } = require('../errors')

describe('retrieveSongsOfArtist', () => {
    before(() => connect('mongodb://localhost:27017/pitch-us-test'))
    let laRengaId, bandalosChinosId, divididosId

    beforeEach(async () => {
        await Artist.deleteMany()
        await Song.deleteMany()

        const { _id: id1 } = await Artist.create({ name: 'La Renga', genres: [Artist.ROCK], country: 'AR' })
        laRengaId = id1

        const { _id: id2 } = await Artist.create({ name: 'Bandalos Chinos', genres: [Artist.INDIE], country: 'AR' })
        bandalosChinosId = id2

        const { _id: id3 } = await Artist.create({ name: 'Divididos', genres: [Artist.ROCK], country: 'AR' })
        divididosId = id3

        await Promise.all([
            Song.create({ artist: laRengaId.toString(), name: 'La razón que te demora', genres: [Song.ROCK], album: 'Detonador de sueños', date: new Date(2003, 0) }),
            Song.create({ artist: bandalosChinosId.toString(), name: 'Que demasiado', genres: [Song.INDIE] }),
            Song.create({ artist: bandalosChinosId.toString(), name: 'Dije tu nombre', genres: [Song.INDIE] }),
            Song.create({ artist: bandalosChinosId.toString(), name: 'La herida', genres: [Song.INDIE] })
        ])
    })

    it('succeeds on existing artists with three songs', async () => {
        const result = await retrieveSongsOfArtist(bandalosChinosId)

        expect(result).to.be.instanceOf(Array)
        expect(result).to.have.length(3)

        result.forEach(song => {
            expect(song._id).to.be.undefined
            expect(song.genres).to.be.undefined
            expect(song.album).to.be.undefined
            expect(song.date).to.be.undefined
            expect(song.interpretations).to.be.undefined
            expect(song.__v).to.be.undefined
            expect(song.id).to.exist
        })

        const songNames = ['Que demasiado', 'Dije tu nombre', 'La herida']

        songNames.forEach(songName => {
            const songIsIncluded = result.some(song => songName === song.name)

            expect(songIsIncluded).to.be.true
        })
    })

    it('succeeds on existing artist with one song', async () => {
        const result = await retrieveSongsOfArtist(laRengaId)

        expect(result).to.be.instanceOf(Array)
        expect(result).to.have.length(1)

        expect(result[0]._id).to.be.undefined
        expect(result[0].genres).to.be.undefined
        expect(result[0].album).to.be.undefined
        expect(result[0].date).to.be.undefined
        expect(result[0].interpretations).to.be.undefined
        expect(result[0].__v).to.be.undefined
        expect(result[0].id).to.exist
        expect(result[0].name).to.equal('La razón que te demora')
    })

    it('succeeds on existing artist with no songs', async () => {
        const result = await retrieveSongsOfArtist(divididosId)

        expect(result).to.be.instanceOf(Array)
        expect(result).to.have.length(0)
    })

    it('fails on unexisting artist', async () => {
        const wrongArtistId = new ObjectId().toString()
        try {
            await retrieveSongsOfArtist(wrongArtistId)
            
            throw new Error('it should not reach this point')
        } catch(error) {
            expect(error).to.be.instanceof(NotFoundError)
            expect(error.message).to.equal(`artist with id ${wrongArtistId} not found`)
        }
    })

    afterEach(() => {
        Artist.deleteMany()
        Song.deleteMany()
    })

    after(() => disconnect())
})