const { Job, User } = require("../models");
const { validateString, validateStringNotEmptyOrBlank } = require("validator");
const { AuthError, ConflictError } = require("errors");

function addJob(adminId, title, description, address, worker) {
  validateString("title");
  validateString("description");
  validateString("addres");
  validateStringNotEmptyOrBlank("title");
  validateStringNotEmptyOrBlank("description");
  validateStringNotEmptyOrBlank("addres");

  return User.findById(adminId).then((userfind) => {
    if (userfind.role === "worker" || userfind === undefined)
      throw new AuthError(`${adminId}you do not have allow for that request`);
    return User.find({ name: worker }).then((user) => {
      user.forEach((_user) => {
        const job = new Job({
          title,
          description,
          address,
          worker: _user.id,
        });
        if (user.length > 2)
          throw new ConflictError(`user with name ${worker} is duplicate`);
        if (user.length === 1) return job.save();
      });
    });
  });
}

module.exports = addJob;
