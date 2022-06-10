const express = require("express");
const router = express.Router();
const ctrl = require("../controllers");
const loadSensorData = require("./loadSensorData");
const actuator = require("./actuator");
const reRequest = require("./reRequest");
const { ipAndUrl } = require("../lib/middleware");

router.use("/load-sensor-data", loadSensorData);
router.use("/operate-actuator", actuator);
router.use("/re-request", reRequest);

router.post("/emergency", ipAndUrl, ctrl.requestLocalServer.emergency);
router.post("/losgin", ipAndUrl, ctrl.requestLocalServer.login);
router.post(
  "/load-actuator-record",
  ipAndUrl,
  ctrl.requestLocalServer.loadActuatorRecord
);
router.post("/update", ipAndUrl, ctrl.requestLocalServer.update);

router.post("/token-v1", ipAndUrl, ctrl.process.tokenV1);

module.exports = router;
