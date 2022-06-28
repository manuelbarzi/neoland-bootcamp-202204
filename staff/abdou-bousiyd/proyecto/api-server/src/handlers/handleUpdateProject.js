const { updateProject } = require("../logic");
const { verifyToken, handleErrorsAndRespond } = require("./helpers");

module.exports = (req, res) => {
  try {
    const userId = verifyToken(req);

    const {
      params: { projectId },
      body: { title, code },
    } = req;

    updateProject(userId, projectId, title, code)
      .then(() => res.status(204).send())
      .catch((error) => handleErrorsAndRespond(error, res));
  } catch (error) {
    handleErrorsAndRespond(error, res);
  }
};
