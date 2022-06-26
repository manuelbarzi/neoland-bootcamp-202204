const { retrieveCloks } = require("../logic");
const { verifyToken, handleErrorsAndRespond } = require("./helpers");

module.exports = (req, res) => {
  try {
    debugger;
    const { userId } = verifyToken(req);

    retrieveCloks(userId)
      .then((data) => {
        res.status(201).json(data);
      })
      .catch((error) => handleErrorsAndRespond(error, res));
  } catch (error) {
    handleErrorsAndRespond(error, res);
  }
};
