const { deleteJob } = require("../logic");
const { verifyToken, handleErrorsAndRespond } = require("./helpers");

module.exports = (req, res) => {
  try {
    const { userId } = verifyToken(req);

    const {
      body: { jobId },
    } = req;

    deleteJob(userId, jobId)
      .then(() => res.status(200).send()) // devuelvo estatus ok y el token
      .catch((error) => handleErrorsAndRespond(error, res));
  } catch (error) {
    handleErrorsAndRespond(error, res);
  }
};
