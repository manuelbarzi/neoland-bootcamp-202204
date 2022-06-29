const { retrieveJobs } = require("../logic");
const { verifyToken, handleErrorsAndRespond } = require("./helpers");

module.exports = (req, res) => {
  try {
    const { userId } = verifyToken(req);

    retrieveJobs(userId)
      .then((data) => {
        res.status(201).json(data);
      })
      .catch((error) => handleErrorsAndRespond(error, res));
  } catch (error) {
    handleErrorsAndRespond(error, res);
  }
};
