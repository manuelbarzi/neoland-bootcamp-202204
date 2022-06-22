const { clockUserJobOut } = require("../logic");
const { verifyToken, handleErrorsAndRespond } = require("./helpers");

module.exports = (req, res) => {
  try {
    debugger;
    const { userId } = verifyToken(req);

    const {
      body: { clockId, jobId },
    } = req;

    clockUserJobOut(userId, clockId, jobId)
      .then(() => res.status(200).send()) // devuelvo estatus ok y el token
      .catch((error) => handleErrorsAndRespond(error, res));
  } catch (error) {
    handleErrorsAndRespond(error, res);
  }
};
