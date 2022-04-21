const express = require("express");
const router = express.Router();
const ctrl = require("../controllers");
const { verifyToken } = require("../lib/middleware");
const loadSensorData = require("./loadSensorData");
const actuator = require("./actuator");
const { ipAndUrl } = require("../lib/middleware");

router.use("/load-sensor-data", loadSensorData);
router.use("/operate-actuator", actuator);

router.post("/emergency", ipAndUrl, ctrl.requestLocalServer.emergency);
router.post("/losgin", ipAndUrl, ctrl.requestLocalServer.login);
router.post(
  "/load-actuator-record",
  ipAndUrl,
  ctrl.requestLocalServer.loadActuatorRecord
);

router.post("/token-v1", ipAndUrl, ctrl.process.tokenV1);

module.exports = router;
