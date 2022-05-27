// const { createCustomError } = require('./createCustomError')
// const {createId} = require('./createId')
// const {parseCookies} = require('./parseCookies')
// const {deleteFiles} = require('./deleteFiles')

// module.exports = {
//     createCustomError,
//     createId,
//     parseCookies,
//     deleteFiles
// }

module.exports = {
    ...require('./createCustomError'),
    ...require('./createId'),
    ...require('./parseCookies'),
    ...require('./deleteFiles')
}