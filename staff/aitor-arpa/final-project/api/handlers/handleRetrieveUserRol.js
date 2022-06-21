const { retrieveUserRol } = require("../logic");
const { verifyToken, handleErrorsAndRespond } = require("./helpers");

module.exports = (req, res) => {
  try {
    const userId = verifyToken(req);
    const {
      body: { role },
    } = req;

    retrieveUserRol(userId, role)
      .then((users) => res.status(200).json(users)) // devuelvo estatus ok y el token
      .catch((error) => handleErrorsAndRespond(error, res));
  } catch (error) {
    handleErrorsAndRespond(error, res);
  }
};
