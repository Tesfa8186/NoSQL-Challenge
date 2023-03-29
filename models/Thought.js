const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction");

const thoughtSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  thoughtText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
  },
  createdAt: { type: Date, default: Date.now },
  reactions: [reactionSchema],
});

const Thought = model("Thought", thoughtSchema);

module.exports = Thought;
