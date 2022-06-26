const { User } = require("../models");
const {
  validateString,
  validateStringNotEmptyOrBlank,
  validateId,
} = require("validator");
const { NotFoundError, ConflictError } = require("errors");

function updateUser(userId, name, username, password, nid, email, role) {
  validateId(userId);
  validateString("name");
  validateString("username");
  validateString("password");
  validateStringNotEmptyOrBlank("nid");
  validateStringNotEmptyOrBlank("email");
  validateStringNotEmptyOrBlank("role");

  return User.findById(userId)
    .then((user) => {
      if (!user) throw new NotFoundError(`user with ${userId} not found`);
      return User.findOneAndReplace(
        { _id: userId },
        { $set: { name, password, email, nid, username, role } }
      );
    })
    .then((result) => {
      if (result.matchedCount === 0) throw new ConflictError(`fail in update`);
    });
}

module.exports = updateUser;
