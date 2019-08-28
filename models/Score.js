const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const ScoreSchema = new Schema({
  snakeScore: { 
    type: Number, 
    required: false,
    default: 0
  },
  user: {
    type: String,
    required: false,
    default: "ABC"
  }
});

module.exports = Score = mongoose.model("scores", ScoreSchema);
