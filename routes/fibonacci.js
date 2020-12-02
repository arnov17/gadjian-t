const { Router } = require("express");

const router = Router();

const fibonacciController = require("../controllers/reverse-controller");

router.post("/register", fibonacciController.create);

module.exports = router;
