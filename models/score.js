const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const scoreSchema = new Schema({
  id: { type: String, required: true }
});

const Score = mongoose.model("Score", scoreSchema);

module.exports = Score;
