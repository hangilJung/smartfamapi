const express = require("express");
const router = express.Router();
const ctrl = require("../controllers");

router.post("/", ctrl.requestLocalServer.loadSensorData);
router.post("/minutes", ctrl.requestLocalServer.minutes);
router.post("/hours", ctrl.requestLocalServer.hours);
router.post("/days", ctrl.requestLocalServer.days);
router.post("/months", ctrl.requestLocalServer.months);
router.post("/years", ctrl.requestLocalServer.years);
router.post("/main", ctrl.requestLocalServer.mainSensorData);
module.exports = router;
