const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const ScoreSchema = new Schema({
  snakeScore: { 
    type: Number, 
    required: false,
    default: 0
  }
});

module.exports = Score = mongoose.model("scores", ScoreSchema);
