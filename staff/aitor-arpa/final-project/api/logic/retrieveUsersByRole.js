const { User } = require("../models");
const { NotFoundError, AuthError } = require("errors");

function retrieveUsersByRole(userId, role) {
  // TODO validate input args

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
        // TODO sanitize (_id -> id)
      });

      return users;
    });
}

module.exports = retrieveUsersByRole;
