const { Router } = require("express");

const router = Router();

const combinationController = require("../controllers/combination-controller");

router.post("/", combinationController.create);

module.exports = router;
