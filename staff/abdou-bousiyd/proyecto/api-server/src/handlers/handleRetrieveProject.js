const { retrieveProject } = require("../logic");
const { handleErrorsAndRespond } = require("./helpers");

module.exports = (req, res) => {
  try { 
    const { params: { projectId }} = req;

    retrieveProject(projectId)
      .then((project) => res.status(200).json(project))
      .catch((error) => handleErrorsAndRespond(error, res));
  } catch (error) {
    handleErrorsAndRespond(error, res);
  }
};
