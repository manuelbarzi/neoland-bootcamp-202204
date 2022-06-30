const registerUser = require("./registerUser");
const authenticateUser = require("./authenticateUser");
const retrieveUser = require("./retrieveUser");
const updateUser = require("./updateUser");

const createProject = require("./createProject");
const retrieveProjects = require("./retrieveProjects");
const updateProject = require("./updateProject");
const deleteProject = require("./deleteProject");
const retrieveProject = require("./retrieveProject");

const toggleLikeOnProject = require("./toggleLikeOnProject");

const retrievePens = require("./retrievePens");

module.exports = {
  registerUser,
  authenticateUser,
  retrieveUser,
  updateUser,

  createProject,
  retrieveProjects,
  updateProject,
  deleteProject,
  retrieveProject,

  toggleLikeOnProject,

  retrievePens
};
