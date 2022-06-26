const {
  Schema,
  Types: { ObjectId },
} = require("mongoose");
const { obj } = require("./User");

const Job = new Schema({
  title: {
    type: String,
  },

  description: {
    type: String,
  },

  address: {
    type: String,
  },

  workers: [
    {
      type: ObjectId,
      ref: "User",
    },
  ],
});

module.exports = Job;
