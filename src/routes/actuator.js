const express = require("express");
const router = express.Router();
const ctrl = require("../controllers");

router.post("/simple", ctrl.requestLocalServer.operateSimpleActuator);
router.post("/nutrient", ctrl.requestLocalServer.operateNutrientSupply);
router.post("/nutrient-stop", ctrl.requestLocalServer.operateNutrientStop);

module.exports = router;
