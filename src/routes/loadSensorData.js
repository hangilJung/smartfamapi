const express = require("express");
const router = express.Router();
const ctrl = require("../controllers");
const { ipAndUrl } = require("../lib/middleware");

router.post("/", ipAndUrl, ctrl.requestLocalServer.loadSensorData);
router.post("/minutes", ipAndUrl, ctrl.requestLocalServer.minutes);
router.post("/hours", ipAndUrl, ctrl.requestLocalServer.hours);
router.post("/days", ipAndUrl, ctrl.requestLocalServer.days);
router.post("/months", ipAndUrl, ctrl.requestLocalServer.months);
router.post("/years", ipAndUrl, ctrl.requestLocalServer.years);
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

router.get("/test", ctrl.requestLocalServer.reRequest);

module.exports = router;
