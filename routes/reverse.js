const { Router } = require("express");

const router = Router();

const reverseController = require("../controllers/reverse-controller");

router.post("/register", reverseController.create);

module.exports = router;
