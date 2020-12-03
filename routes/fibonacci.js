const { Router } = require("express");

const router = Router();

const fibonacciController = require("../controllers/fibonacci-controller");

router.post("/", fibonacciController.create);

module.exports = router;
