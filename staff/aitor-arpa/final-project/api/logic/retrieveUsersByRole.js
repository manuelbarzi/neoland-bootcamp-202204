const { User } = require("../models");
const { NotFoundError, AuthError } = require("errors");
const { validateId, validateStringNotEmptyOrBlank } = require("validator");

function retrieveUsersByRole(userId, role) {
  validateId(userId);
  validateStringNotEmptyOrBlank(role);
  s;

  return User.findById(userId)
    .then((user) => {
      if (!user)
        throw new NotFoundError(`user with id ${userId} does not exist`);

      if (user.role !== "admin")
        throw new AuthError(`user with id ${userId} is not an admin`);

      return User.find({ role });
    })
    .then((users) => {
      users.forEach((user) => {
        const doc = user._doc;
        delete doc.password;
        delete doc._v;
      });

      return users;
    });
}

module.exports = retrieveUsersByRole;
