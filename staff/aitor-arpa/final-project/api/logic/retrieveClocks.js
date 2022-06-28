const { NotFoundError, AuthError } = require("errors");
const { Clock, User } = require("../models");
const { validateId } = require("validator");

function retrieveClocks(userId) {
  debugger;
  validateId(userId);
  return User.findById(userId)
    .then((user) => {
      if (!user) throw new NotFoundError(`${userId} Not Found`);

      if (user.role !== "admin")
        throw new AuthError(`user with id ${userId} is not an admin`);

      return Clock.find().populate("user job");
    })
    .then((clocks) => {
      // TODO sanitize del user y el job en cada clock
      clocks.forEach((clock) => {
        doc = clock._doc;
        delete doc.__v;
        delete doc._id;
        delete doc.user._doc._id;
        delete doc.user._doc.password;
        delete doc.user._doc.email;
        delete doc.user._doc.username;
        delete doc.user._doc.Date;
        delete doc.user._doc.role;
        if (doc.job) {
          delete doc.job._doc._id;
          delete doc.job._doc.description;
          delete doc.job._doc.address;
          delete doc.job._doc.workers;
          delete doc.job._doc.__v;
          return doc;
        }
        return doc;
      });

      return clocks;
    });
}

module.exports = retrieveClocks;
