const { Router } = require("express");

const router = Router();

const employController = require("../controllers/employ-controller");

router.get("/read", employController.read);
router.get("/read/:id", employController.findById);
router.post("/register", employController.create);
router.put("/update/:id", employController.update);
router.delete("/delete/:id", employController.delete);

module.exports = router;
