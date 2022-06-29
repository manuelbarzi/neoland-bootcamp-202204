const { authenticateUser } = require("../logic");
const { generateToken, handleErrorsAndRespond } = require("./helpers");

module.exports = (req, res) => {
  try {
    const {
      body: { username, password },
    } = req;

    authenticateUser(username, password)
      .then((data) => {
        const { userId, role } = data;

        const token = generateToken(userId, role);

        res.status(200).json({ token });
      })
      .catch((error) => handleErrorsAndRespond(error, res));
  } catch (error) {
    handleErrorsAndRespond(error, res);
  }
};
