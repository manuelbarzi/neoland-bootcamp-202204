const { Job, User } = require("../models");

const { AuthError } = require("errors");

function deleteJob(adminId, id) {
  debugger
  return User.findOne({ _id: adminId })
    .then(userfind => {
      if (userfind.role === 'worker')
        throw new AuthError(`${adminId} conctat for you Manager`)
      return Job.deleteOne({ id: id })
    })
    .then(res => {
      if (!res)
        throw new AuthError('User no found')
      return res
    })
    .catch(error => {
      return error
    })
}


module.exports = deleteJob