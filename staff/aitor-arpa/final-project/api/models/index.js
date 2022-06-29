const { model } = require("mongoose");

const { job, user, report, clock } = require("./schemas");

const User = model("User", user);
const Report = model("Report", report);
const Job = model("Job", job);
const Clock = model("Clock", clock);

module.exports = {
  User,
  Report,
  Job,
  Clock,
};
