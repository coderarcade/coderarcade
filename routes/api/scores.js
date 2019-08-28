const express = require("express");
const router = express.Router();
const keys = require("../../config/keys");
// Load User model
const Score = require("../../models/Score");

// @route POST api/score/scoreboard
// @desc Register score
// @access Public
// router.post("/scoreboard", (req, res) => {
//   const newScore = new Score({
//     snakeScore: req.body.snakeScore
//   });
//   Score
//     .create(newScore)
//     .then(score => res.json(score))
//     .catch(err => console.log(err));
// });

module.exports = router;