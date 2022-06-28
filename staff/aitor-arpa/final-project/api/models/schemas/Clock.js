const { ObjectId } = require("bson");
const { Schema } = require("mongoose");

const clock = new Schema({
  user: {
    type: ObjectId,
    ref: "User",
  },
  job: {
    type: ObjectId,
    ref: "Job",
  },
  timein: {
    type: Date,
    default: Date.now,
  },
  timeout: {
    type: Date,
  },
});
module.exports = clock;
