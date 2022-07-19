const express = require("express");
const router = express.Router();
const ctrl = require("../controllers");
const { ipAndUrl } = require("../lib/middleware");

router.post("/simple", ipAndUrl, ctrl.requestLocalServer.operateSimpleActuator);
router.post("/fan-status", ipAndUrl, ctrl.requestLocalServer.fanStatus);
router.post("/fan-status-gw", ipAndUrl, ctrl.requestLocalServer.fanStatusGw);
router.post(
  "/nutrient",
  ipAndUrl,
  ctrl.requestLocalServer.operateNutrientSupply
);
router.post(
  "/nutrient-stop",
  ipAndUrl,
  ctrl.requestLocalServer.operateNutrientStop
);
router.post(
  "/load-nutrient-data",
  ipAndUrl,
  ctrl.requestLocalServer.loadNutrientData
);
router.post("/start", ipAndUrl, ctrl.requestLocalServer.start);
router.post("/stop", ipAndUrl, ctrl.requestLocalServer.stop);
router.post(
  "/nutriculture-machine-status",
  ipAndUrl,
  ctrl.requestLocalServer.nutricultureMachineStatus
);
router.post(
  "/control-mode-easy",
  ipAndUrl,
  ctrl.requestLocalServer.easySelection
);
router.post(
  "/control-mode-detail",
  ipAndUrl,
  ctrl.requestLocalServer.detailSelection
);
router.post("/easy-setting", ipAndUrl, ctrl.requestLocalServer.easySetting);
router.post("/detail-setting-time", ctrl.requestLocalServer.detailSettingTime);
router.post(
  "/detail-setting-matter",
  ipAndUrl,
  ctrl.requestLocalServer.detailSettingMatter
);
router.post(
  "/detail-setting-is-use",
  ipAndUrl,
  ctrl.requestLocalServer.detailSettingIsUse
);
router.post(
  "/detail-setting-tray-is-use",
  ipAndUrl,
  ctrl.requestLocalServer.detailSettingTrayIsUse
);
router.post(
  "/detail-supply-setting",
  ipAndUrl,
  ctrl.requestLocalServer.detailSupplySetting
);
router.post("/ec-ph-setting", ipAndUrl, ctrl.requestLocalServer.ecPhSetting);
router.post("/detail-setting", ipAndUrl, ctrl.requestLocalServer.detailSetting);

module.exports = router;
