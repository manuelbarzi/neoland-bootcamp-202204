const createCustomError = require('./createCustomError')
const createId = require('./createId')
const parseCookies = require('./parseCookies')
const deleteFiles = require('./deleteFiles')
const printObjectGraph = require('./printObjectGraph')

module.exports = {
    createCustomError,
    createId,
    parseCookies,
    deleteFiles,
    printObjectGraph
}

// module.exports = {
//     ...require('./createCustomError'),
//     ...require('./createId'),
//     ...require('./parseCookies'),
//     ...require('./deleteFiles')
// }