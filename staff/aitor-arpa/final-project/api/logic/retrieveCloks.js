const { NotFoundError, AuthError } = require("errors");
const { Clock, User } = require("../models");
const { validateId } = require("validator");

function retrieveCloks(userId) {
  validateId(userId);
  return User.findById(userId)
    .then((user) => {
      if (!user) throw new NotFoundError(`${userId} Not Found`);
      if (user.role !== "admin")
        throw new AuthError(`user with id ${userId} is not an admin`);
      return Clock.find();
    })
    .then((clock) => {
      if (!clock) throw new NotFoundError("search failed");

      return clock;
    });
}

module.exports = retrieveCloks;
