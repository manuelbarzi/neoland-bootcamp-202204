const { connect, disconnect } = require('mongoose')
const { Artist } = require('../models')
const { ConflictError } = require('../errors')
const createArtist = require('./createArtist')
const { expect } = require('chai')

describe('createArtist', () => {
    before(() => connect('mongodb://localhost:27017/pitch-us-test'))

    beforeEach(() => {
        Artist.deleteMany()
    
        Artist.create({ name: 'La Renga', genres: [Artist.ROCK], country: 'AR' })
    })

    it('succeeds on new artist', async () => {
        const result = await createArtist('Divididos', [Artist.ROCK], 'AR')

        expect(result).to.be.string

        const createdArtist = await Artist.findById(result)

        expect(createdArtist.name).to.equal('Divididos')
        expect(createdArtist.genres[0]).to.equal(Artist.ROCK)
        expect(createdArtist.country).to.equal('AR')
    })

    it('fails when artist already exists', async () => {
        try {
            await createArtist('La Renga', [Artist.PUNK], 'BR')

            throw new Error('should not reach this point')
        } catch (error) {
            expect(error).to.be.instanceOf(ConflictError)
            expect(error.message).to.equal(`artist La Renga already exists`)
        }
    })

    it('fails when country is not included in model', async () => {
        try {
            await createArtist('Divididos', [Artist.PUNK], 'ZZ')

            throw new Error('should not reach this point')

        } catch (error) {
            expect(error).to.be.instanceOf(ConflictError)
            debugger
            expect(error.message).to.equal(`invalid country code ZZ`)
        }
    })

    it('fails on incorrect genre', async () => {
        try {
            await createArtist('Divididos', [26], 'AR')

            throw new Error('should not reach this point')
        } catch (error) {
            expect(error).to.be.instanceOf(ConflictError)
            expect(error.message).to.equal(`invalid genre`)
        }
    })

    afterEach(() => Artist.deleteMany())

    after(() => disconnect())
})