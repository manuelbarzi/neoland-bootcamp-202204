const cors = (req, res, next) => { // CORS middleware
    res.setHeader('Acces-Control-Allow-Origin', '*')
    res.setHeader('Acces-Control-Allow-Headers', '*')
    res.setHeader('Acces-Control-Allow-Methods', '*')

    next()
}

module.exports = { cors }