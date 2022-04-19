const express = require("express");
const router = express.Router();
const ctrl = require("../controllers");
const requestWithTokenAndData = require("../utils/requestWithTokenAndData");
const { verifyToken } = require("../lib/middleware");
const loadSensorData = require("./loadSensorData");
const actuator = require("./actuator");

router.use("/load-sensor-data", loadSensorData);
router.use("/operate-actuator", actuator);

router.post("/emergency", ctrl.requestLocalServer.emergency);
router.post("/losgin", ctrl.requestLocalServer.login);
router.post(
  "/load-actuator-record",
  ctrl.requestLocalServer.loadActuatorRecord
);

router.post("/emergency", ctrl.requestLocalServer.emergency);

router.post("/token-v1", ctrl.process.tokenV1);
router.post("/test", async (req, res) => {
  res.json(result.data);
});

module.exports = router;
