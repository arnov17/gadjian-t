const { Router } = require("express");

const router = Router();

const combinationController = require("../controllers/combination-controller");

router.post("/create", combinationController.create);

module.exports = router;
