const { Job, User } = require("../models");
const { validateString, validateStringNotEmptyOrBlank } = require("validator");
const { AuthError, NotFoundError } = require("errors");

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

    workers.forEach((worker) => {
      return User.findById(worker)
        .then((user) => {
          if (!user) throw new NotFoundError(`user with id ${worker} no found`);
        })
        .then(() => {});
    });

    const job = new Job({ title, description, address, workers });
    return job.save();
  });
}

module.exports = addJob;
