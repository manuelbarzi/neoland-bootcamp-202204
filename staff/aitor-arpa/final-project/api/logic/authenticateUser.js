const { User } = require("../models");
const { AuthError } = require("errors");
const { validateUsername, validatePassword } = require("validator");

function authenticateUser(username, password) {
  validateUsername(username);
  validatePassword(password);

  return User.findOne({ username, password }).then((user) => {
    if (!user) throw new AuthError("wrong credentials");

    return { userId: user.id, role: user.role };
  });
}

module.exports = authenticateUser;
