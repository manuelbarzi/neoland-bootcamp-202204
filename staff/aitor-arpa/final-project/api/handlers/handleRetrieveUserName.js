const { retrieveUser } = require("../logic");
const { handleErrorsAndRespond } = require("./helpers");

module.exports = (req, res) => {
  try {
    const {
      params: { id },
    } = req;

    retrieveUser(id)
      .then((user) => res.status(200).json(user)) // devuelvo estatus ok y el token
      .catch((error) => handleErrorsAndRespond(error, res));
  } catch (error) {
    handleErrorsAndRespond(error, res);
  }
};
