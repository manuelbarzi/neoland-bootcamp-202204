const { UpdateJob } = require("../logic");
const { verifyToken, handleErrorsAndRespond } = require("./helpers");

module.exports = (req, res) => {
  try {
    const { userId } = verifyToken(req);
    const {
      body: { jobId, title, description, address, workers },
    } = req;
    UpdateJob(userId, jobId, title, description, address, workers)
      .then((data) => {
        res.status(201).json({ data });
      })
      .catch((error) => handleErrorsAndRespond(error, res));
  } catch (error) {
    handleErrorsAndRespond(error, res);
  }
};
