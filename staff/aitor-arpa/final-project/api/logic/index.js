const createUser = require("./createUser");
const authenticateUser = require("./authenticateUser");
const retrieveUser = require("./retrieveUser");
const updateUser = require("./updateUser");
const unregisterUser = require("./unregisterUser");
const addJob = require("./addJob");
const clockUserIn = require("./clockUserIn");
const clockUserOut = require("./clockUserOut");
const retrieveClockUser = require("./retrieveClockUser");
const clockUserJobIn = require("./clockUserJobIn");
const clockUserJobOut = require("./clockUserJobOut");
const retrieveClockJob = require("./retrieveClockJob");
const deleteJob = require("./deleteJob");
const retrieveJobs = require("./retrieveAllJobs");
const retrieveJobsUser = require("./retrieveUserJobs");
const retrieveUsersByRole = require("./retrieveUsersByRole");
const retrieveClocks = require("./retrieveClocks");
const updateJob = require("./updateJob");

module.exports = {
  createUser,
  authenticateUser,
  retrieveUser,
  unregisterUser,
  updateUser,
  addJob,
  deleteJob,
  retrieveJobs,
  retrieveJobsUser,
  clockUserIn,
  clockUserOut,
  retrieveClockUser,
  clockUserJobIn,
  clockUserJobOut,
  retrieveClockJob,
  retrieveUsersByRole,
  retrieveClocks,
  UpdateJob: updateJob,
};
