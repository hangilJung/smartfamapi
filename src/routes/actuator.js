const express = require("express");
const router = express.Router();
const ctrl = require("../controllers");

router.post("/simple", ctrl.requestLocalServer.operateSimpleActuator);
router.post("/nutrient", ctrl.requestLocalServer.operateNutrientSupply);
router.post("/nutrient-stop", ctrl.requestLocalServer.operateNutrientStop);
router.post("/load-nutrient-data", ctrl.requestLocalServer.loadNutrientData);
router.post("/start", ctrl.requestLocalServer.start);
router.post("/stop", ctrl.requestLocalServer.stop);
router.post(
  "/nutriculture-machine-status",
  ctrl.requestLocalServer.nutricultureMachineStatus
);
router.post("/control-mode-easy", ctrl.requestLocalServer.easySelection);
router.post("/control-mode-detail", ctrl.requestLocalServer.detailSelection);
router.post("/easy-setting", ctrl.requestLocalServer.easySetting);
router.post("/detail-setting-time", ctrl.requestLocalServer.detailSettingTime);
router.post(
  "/detail-setting-matter",
  ctrl.requestLocalServer.detailSettingMatter
);
router.post(
  "/detail-setting-is-use",
  ctrl.requestLocalServer.detailSettingIsUse
);
router.post(
  "/detail-setting-tray-is-use",
  ctrl.requestLocalServer.detailSettingTrayIsUse
);
router.post(
  "/detail-supply-setting",
  ctrl.requestLocalServer.detailSupplySetting
);
router.post("/ec-ph-setting", ctrl.requestLocalServer.ecPhSetting);
router.post("/detail-setting", ctrl.requestLocalServer.detailSetting);

module.exports = router;
