const router = require("express").Router();
const scoreRoutes = require("./scores");

// Book routes
router.use("/scores", scoreRoutes);

module.exports = router;
