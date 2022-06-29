const { NotFoundError } = require("errors");
const { Clock, User } = require("../models");
const { validateId } = require("validator");

function retrieveClockUser(userid) {
  validateId(userid);
  return User.findById(userid)
    .then((user) => {
      if (!user) throw new NotFoundError(`${userid} Not Found`);
      return Clock.find({ user: userid, job: null }).lean();
    })
    .then((clocks) => {
      clocks.forEach((clock) => {
        clock.id = clock._id.toString();
        delete clock._id;

        delete clock.__v;
      });
      return clocks;
    });
}

module.exports = retrieveClockUser;
