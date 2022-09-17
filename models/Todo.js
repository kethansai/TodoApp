const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      default: "created",
    },
    expire: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const Todo = new mongoose.Model("Todo", TodoSchema);
module.exports = Todo;
