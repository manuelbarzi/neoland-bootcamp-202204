const { retrieveUsersByRole } = require("../logic");
const { verifyToken, handleErrorsAndRespond } = require("./helpers");

module.exports = (req, res) => {
  try {
    debugger;
    const { userId } = verifyToken(req);

    const {
      params: { role },
    } = req;

    retrieveUsersByRole(userId, role)
      .then((users) => res.status(200).json(users)) // devuelvo estatus ok y el token
      .catch((error) => handleErrorsAndRespond(error, res));
  } catch (error) {
    handleErrorsAndRespond(error, res);
  }
};
