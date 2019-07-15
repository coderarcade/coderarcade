const router = require("express").Router();
const scoresController = require("../../controllers/scoresController");

// Matches with "/api/scores"
router.route("/")
  .get(scoresController.findAll)
  .post(scoresController.create);

// Matches with "/api/scores/:id"
router.route("/:id")
  .get(scoresController.findById)
  .put(scoresController.update)
  .delete(scoresController.remove);

module.exports = router;
