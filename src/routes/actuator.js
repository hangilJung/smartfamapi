const express = require("express");
const router = express.Router();
const ctrl = require("../controllers");

router.post("/simple", ctrl.requestLocalServer.operateSimpleActuator);
router.post("/nutrient", ctrl.requestLocalServer.operateNutrientSupply);
router.post("/nutrient-stop", ctrl.requestLocalServer.operateNutrientStop);
router.post("/load-nutrient-data", ctrl.requestLocalServer.loadNutrientData);
router.post("/start", ctrl.requestLocalServer.start);
router.post("/stop", ctrl.requestLocalServer.stop);

module.exports = router;
