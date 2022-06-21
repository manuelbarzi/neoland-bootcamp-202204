const { User } = require('../../models')
const { NotFoundError } = require('errors')
const { validateObjectId } = require('../../validators')
const Apium = require('../../vendor/Apium')

module.exports = async userId => {
    validateObjectId(userId)

    const user = await User.findById(userId)

    if (!user) throw new NotFoundError(`user with id ${userId} not found`)

    if (!user.spotifySession) throw new NotFoundError(`not spotifySession save for user with id ${userId}`)

    const expireDate = new Date(user.spotifySession.expireDate)

    if (Date.now() > expireDate) {
        const api = new Apium(process.env.SPOTIFY_ACCOUNTS_API_URL)

        const { status, payload } = await api.post(
            'token',
            {
                headers: {
                    'content-type': 'application/x-www-form-urlencoded',
                    Authorization: `Basic ${(new Buffer(process.env.SPOTIFY_CLIENT_ID + ':' + process.env.SPOTIFY_CLIENT_SECRET).toString('base64'))}`
                },
                body: `grant_type=refresh_token&refresh_token=${user.spotifySession.refresh_token}`
            })

        debugger
        
        if (status === 200) {
            const spotifyToken = JSON.parse(payload)

            const now = Date.now()

            const expireDate = now + spotifyToken.expires_in

            spotifyToken.expireDate = expireDate

            user.spotifySession = spotifyToken
            
            await user.save()
            
            return spotifyToken.access_token

        } else throw new Error('Spotify refresh_token error')
    }

    return user.spotifyToken.access_token
}