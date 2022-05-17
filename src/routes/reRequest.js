const express = require("express");
const router = express.Router();
const ctrl = require("../controllers");
const { ipAndUrl } = require("../lib/middleware");

router.get("/simple", ipAndUrl, ctrl.requestLocalServer.reRequestSimple);
router.get("/easy-setting", ipAndUrl, ctrl.requestLocalServer.easySetting);

module.exports = router;
