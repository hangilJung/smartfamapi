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
router.post("/test", (req, res) => {
  console.log("test에 요청옴");
});
router.post("/set-action", ipAndUrl, ctrl.requestLocalServer.setAction);
router.post("/read-action", ipAndUrl, ctrl.requestLocalServer.readAction);
router.post("/set-condition", ipAndUrl, ctrl.requestLocalServer.setCondition);
router.post("/get-condition", ipAndUrl, ctrl.requestLocalServer.getCondition);

module.exports = router;
