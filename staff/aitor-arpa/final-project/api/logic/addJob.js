const { Job, User } = require("../models");
const { validateString, validateStringNotEmptyOrBlank } = require("validator");
const { AuthError } = require("errors");

function addJob(adminId, title, description, address, workers) {
  validateString("title");
  validateString("description");
  validateString("addres");
  validateStringNotEmptyOrBlank("title");
  validateStringNotEmptyOrBlank("description");
  validateStringNotEmptyOrBlank("addres");

  return User.findById(adminId).then((userfind) => {
    if (userfind.role === "worker" || userfind === undefined)
      throw new AuthError(`${adminId}you do not have allow for that request`);

    /*             return User.findById(workers[0])
        })
        .then(user => {
            if(!user)
            throw new NotFoundError(`${user} no found`)  */

    const job = new Job({ title, description, address, workers });

    //      _job = job.save()

    //    result = job.workers.push(user._id)

    return job.save();
  });
}

module.exports = addJob;
