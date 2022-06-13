const { Job } = require("../models");
const { validateObjectId} = require('../validators')

function deleteWork(adminId, id) {
  validateObjectId(adminId)
  validateObjectId(id)

    return User.findOne({ id: adminId })
    .then(userfind => {
      if (userfind.role != 'admin')
        throw new AuthError(`${adminId} conctat for you Manager`)
      return Job.deleteOne(id)
        .then(res => {
          if (!res)
            throw new Error
        })
    })

}

module.exports = deleteWork