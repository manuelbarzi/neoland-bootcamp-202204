const { UpdateUser } = require("../logic");
const updateUser = require("../logic/updateUser");
const { verifyToken, handleErrorsAndRespond } = require("./helpers");

module.exports = (req, res) => {
  try {
    const { userId } = verifyToken(req);

    const {
      body: { name, username, password, nid, email, role },
    } = req;

    updateUser(userId, name, username, password, nid, email, role)
      .then(() => res.status(200).send()) // devuelvo estatus ok y el token
      .catch((error) => handleErrorsAndRespond(error, res));
  } catch (error) {
    handleErrorsAndRespond(error, res);
  }
};
