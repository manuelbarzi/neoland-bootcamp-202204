const { retrieveProject } = require("../logic");
const { handleErrorsAndRespond, verifyToken } = require("./helpers");

module.exports = (req, res) => {
  try {
    const {
      params: { projectId },
    } = req;
    const userId = verifyToken(req);

    retrieveProject(projectId)
      .then((project) => res.status(200).json(project))
      .catch((error) => handleErrorsAndRespond(error, res));
  } catch (error) {
    handleErrorsAndRespond(error, res);
  }
};
