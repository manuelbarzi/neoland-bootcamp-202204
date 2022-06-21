const { NotFoundError } = require("errors");
const { Clock, User } = require("../models");
const { validateId } = require("validator");

function retrieveClockUser(userid) {
  validateId(userid);
  return User.findById(userid)
    .then((user) => {
      if (!user) throw new NotFoundError(`${userid} Not Found`);
      return Clock.find({ user: userid, job: null });
    })
    .then((clock) => {
      if (!clock) throw new NotFoundError("search failed");

      return clock;
    });
}

module.exports = retrieveClockUser;
