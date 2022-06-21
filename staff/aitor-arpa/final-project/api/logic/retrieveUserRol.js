const { User } = require("../models");
const { NotFoundError, ConflictError } = require("errors");

function retrieveUserRol(userId, rol) {
  return User.find({ id: userId })
    .then((user) => {
      if (!user)
        throw new NotFoundError(`user with id ${userId} does not exist`);

      return User.find({ role: rol });
    })
    .then((users) => {
      if (!users)
        throw new ConflictError("not users with the indicated filter");
      return users;
    });
}

module.exports = retrieveUserRol;
