const express = require("express");
const router = express.Router();
const ctrl = require("../controllers");
const { ipAndUrl } = require("../lib/middleware");

router.post("/", ipAndUrl, ctrl.requestLocalServer.loadSensorData);
router.post("/minutes", ipAndUrl, ctrl.requestLocalServer.minutes);
router.post("/hours", ipAndUrl, ctrl.requestLocalServer.hours);

router.post(
  "/main-inside",
  ipAndUrl,
  ctrl.requestLocalServer.mainInsideSensorData
);
router.post(
  "/main-outside",
  ipAndUrl,
  ctrl.requestLocalServer.mainOutsideSensorData
);
router.post("/bed-data", ipAndUrl, ctrl.requestLocalServer.bedData);
router.post(
  "/hour-consum",
  ipAndUrl,
  ctrl.requestLocalServer.hourConsumptionData
);
router.post(
  "/day-consum",
  ipAndUrl,
  ctrl.requestLocalServer.dayConsumptionData
);
router.post(
  "/month-consum",
  ipAndUrl,
  ctrl.requestLocalServer.monthConsumptionData
);
router.post(
  "/year-consum",
  ipAndUrl,
  ctrl.requestLocalServer.yearConsumptionData
);

router.post("/minutely", ipAndUrl, ctrl.requestLocalServer.minutely);
router.post("/hourly", ipAndUrl, ctrl.requestLocalServer.hourly);
router.post("/daily", ipAndUrl, ctrl.requestLocalServer.daily);
router.post("/monthly", ipAndUrl, ctrl.requestLocalServer.monthly);
router.post("/yearly", ipAndUrl, ctrl.requestLocalServer.yearly);

router.get("/test", ctrl.requestLocalServer.reRequest);

module.exports = router;
