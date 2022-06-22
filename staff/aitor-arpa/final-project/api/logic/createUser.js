const { User } = require("../models");
const { ConflictError, AuthError } = require("errors");
const { validateStringNotEmptyOrBlank } = require("validator");

function createUser(adminId, name, username, password, role, nid, email, date) {
  validateStringNotEmptyOrBlank(name);
  validateStringNotEmptyOrBlank(username);
  validateStringNotEmptyOrBlank(password);
  validateStringNotEmptyOrBlank(nid);
  validateStringNotEmptyOrBlank(email);
  validateStringNotEmptyOrBlank(role);

  return User.findOne({ _id: adminId })
    .lean() // solo trae el documento sin modelo
    .then((user) => {
      if (user.role != "admin")
        throw new AuthError(`${username} conctat for you Manager`);
      if (user.code === 11000)
        throw new ConflictError(`${email} or ${username}is duplicate`);
      return User.create({ name, username, password, role, nid, email, date });
    })
    .catch((error) => {
      if (error.message.includes(`username`))
        throw new ConflictError(`${username} al ready exist`);
      if (error.message.includes(`email`))
        throw new ConflictError(`${email} al ready exist`);
    });
}

module.exports = createUser;
