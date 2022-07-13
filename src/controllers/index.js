const RequestLocal = require("../models/RequestLocal");
const fn = require("../lib/fn");

const requestLocalServer = {
  loadSensorData: async (req, res) => {
    const requestLocal = new RequestLocal();
    const response = await requestLocal.loadSensorData();
    if (fn.tokenIsReissuance(response)) {
      res.redirect(fn.urlAndData(req));
    } else {
      res.json(response);
    }
  },
  mainInsideSensorData: async (req, res) => {
    const requestLocal = new RequestLocal();
    const response = await requestLocal.mainInsideSensorData();
    if (fn.tokenIsReissuance(response)) {
      res.redirect(fn.urlAndData(req));
    } else {
      res.json(response);
    }
  },
  mainOutsideSensorData: async (req, res) => {
    const requestLocal = new RequestLocal();
    const response = await requestLocal.mainOutsideSensorData();
    if (fn.tokenIsReissuance(response)) {
      res.redirect(fn.urlAndData(req));
    } else {
      res.json(response);
    }
  },
  emergency: async (req, res) => {
    const requestLocal = new RequestLocal();
    const response = await requestLocal.emergency();
    if (fn.tokenIsReissuance(response)) {
      res.redirect(fn.urlAndData(req));
    } else {
      res.json(response);
    }
  },
  login: async (req, res) => {
    const requestLocal = new RequestLocal(req.body);
    const response = await requestLocal.login();
    if (fn.tokenIsReissuance(response)) {
      res.redirect(fn.urlAndData(req));
    } else {
      res.json(response);
    }
  },
  loadActuatorRecord: async (req, res) => {
    const requestLocal = new RequestLocal(req.body);
    const response = await requestLocal.loadActuatorRecord();
    if (fn.tokenIsReissuance(response)) {
      res.redirect(fn.urlAndData(req));
    } else {
      res.json(response);
    }
  },
  operateSimpleActuator: async (req, res) => {
    const requestLocal = new RequestLocal(req.body);
    const response = await requestLocal.operateSimpleActuator();

    if (fn.tokenIsReissuance(response)) {
      res.redirect(fn.simpleUrlAndData(req));
    } else {
      res.json(response);
    }
  },
  operateNutrientSupply: async (req, res) => {
    const requestLocal = new RequestLocal(req.body);
    const response = await requestLocal.operateNutrientActuator();

    if (fn.tokenIsReissuance(response)) {
      res.redirect(fn.urlAndData(req));
    } else {
      res.json(response);
    }
  },
  operateNutrientStop: async (req, res) => {
    const requestLocal = new RequestLocal(req.body);
    const response = await requestLocal.operateNutrientStop();

    if (fn.tokenIsReissuance(response)) {
      res.redirect(fn.urlAndData(req));
    } else {
      res.json(response);
    }
  },
  minutes: async (req, res) => {
    const requestLocal = new RequestLocal(req.body);
    const response = await requestLocal.minutes();

    if (fn.tokenIsReissuance(response)) {
      res.redirect(fn.urlAndData(req));
    } else {
      res.json(response);
    }
  },
  days: async (req, res) => {
    const requestLocal = new RequestLocal(req.body);
    const response = await requestLocal.days();

    if (fn.tokenIsReissuance(response)) {
      res.redirect(fn.urlAndData(req));
    } else {
      res.json(response);
    }
  },
  hours: async (req, res) => {
    const requestLocal = new RequestLocal(req.body);
    const response = await requestLocal.hours();

    if (fn.tokenIsReissuance(response)) {
      res.redirect(fn.urlAndData(req));
    } else {
      res.json(response);
    }
  },
  months: async (req, res) => {
    const requestLocal = new RequestLocal(req.body);
    const response = await requestLocal.months();

    if (fn.tokenIsReissuance(response)) {
      res.redirect(fn.urlAndData(req));
    } else {
      res.json(response);
    }
  },
  years: async (req, res) => {
    const requestLocal = new RequestLocal(req.body);
    const response = await requestLocal.years();

    if (fn.tokenIsReissuance(response)) {
      res.redirect(fn.urlAndData(req));
    } else {
      res.json(response);
    }
  },
  update: async (req, res) => {
    const requestLocal = new RequestLocal(req.body);
    const response = await requestLocal.update();
    res.json(response);
  },
  loadNutrientData: async (req, res) => {
    const requestLocal = new RequestLocal(req.body);
    const response = await requestLocal.loadNutrientData();

    if (fn.tokenIsReissuance(response)) {
      res.redirect(fn.urlAndData(req));
    } else {
      res.json(response);
    }
  },
  reRequest: async (req, res) => {
    const requestLocal = new RequestLocal(req.query);
    const response = await requestLocal.reRequestData();
    res.json(response);
  },
  reRequestSimple: async (req, res) => {
    const requestLocal = new RequestLocal(req.query);
    const response = await requestLocal.reRequestSimple();
    res.json(response);
  },
  bedData: async (req, res) => {
    const requestLocal = new RequestLocal(req.query);
    const response = await requestLocal.readBedData();
    if (fn.tokenIsReissuance(response)) {
      res.redirect(fn.urlAndData(req));
    } else {
      res.json(response);
    }
  },
  start: async (req, res) => {
    const requestLocal = new RequestLocal();
    const response = await requestLocal.start();

    res.json(response);
  },
  stop: async (req, res) => {
    const requestLocal = new RequestLocal();
    const response = await requestLocal.stop();

    res.json(response);
  },
  irrigation: async (req, res) => {
    const requestLocal = new RequestLocal(req.body);
    const response = await requestLocal.irrigation();

    res.json(response);
  },
  nutricultureMachineStatus: async (req, res) => {
    const requestLocal = new RequestLocal();
    const response = await requestLocal.nutriculatureMachineStatus();

    if (fn.tokenIsReissuance(response)) {
      res.redirect(fn.urlAndData(req));
    } else {
      res.json(response);
    }
  },
  easySelection: async (req, res) => {
    const requestLocal = new RequestLocal();
    const response = await requestLocal.easySelection();

    if (fn.tokenIsReissuance(response)) {
      res.redirect(fn.urlAndData(req));
    } else {
      res.json(response);
    }
  },
  detailSelection: async (req, res) => {
    const requestLocal = new RequestLocal();
    const response = await requestLocal.detailSelection();

    if (fn.tokenIsReissuance(response)) {
      res.redirect(fn.urlAndData(req));
    } else {
      res.json(response);
    }
  },
  easySetting: async (req, res) => {
    const requestLocal = new RequestLocal(req.body);
    const response = await requestLocal.easySetting();

    if (fn.tokenIsReissuance(response)) {
      res.redirect(fn.urlAndData(req));
    } else {
      res.json(response);
    }
  },
  detailSettingTime: async (req, res) => {
    const requestLocal = new RequestLocal(req.body);
    const response = await requestLocal.detailSettingTime();

    if (fn.tokenIsReissuance(response)) {
      res.redirect(fn.urlAndData(req));
    } else {
      res.json(response);
    }
  },
  detailSettingMatter: async (req, res) => {
    const requestLocal = new RequestLocal(req.body);
    const response = await requestLocal.detailSettingMatter();

    if (fn.tokenIsReissuance(response)) {
      res.redirect(fn.urlAndData(req));
    } else {
      res.json(response);
    }
  },
  detailSettingIsUse: async (req, res) => {
    const requestLocal = new RequestLocal(req.body);
    const response = await requestLocal.detailSettingIsUse();

    if (fn.tokenIsReissuance(response)) {
      res.redirect(fn.urlAndData(req));
    } else {
      res.json(response);
    }
  },
  detailSettingTrayIsUse: async (req, res) => {
    const requestLocal = new RequestLocal(req.body);
    const response = await requestLocal.detailSettingTrayIsUse();

    if (fn.tokenIsReissuance(response)) {
      res.redirect(fn.urlAndData(req));
    } else {
      res.json(response);
    }
  },
  detailSupplySetting: async (req, res) => {
    const requestLocal = new RequestLocal(req.body);
    const response = await requestLocal.detailSupplySetting();

    res.json(response);
  },
  hourConsumptionData: async (req, res) => {
    const requestLocal = new RequestLocal();
    const response = await requestLocal.hourConsumptionData();
    res.json(response);
  },
  dayConsumptionData: async (req, res) => {
    const requestLocal = new RequestLocal();
    const response = await requestLocal.dayConsumptionData();
    res.json(response);
  },
  monthConsumptionData: async (req, res) => {
    const requestLocal = new RequestLocal();
    const response = await requestLocal.monthConsumptionData();
    res.json(response);
  },
  yearConsumptionData: async (req, res) => {
    const requestLocal = new RequestLocal();
    const response = await requestLocal.yearConsumptionData();
    res.json(response);
  },
  accumulateConsumptionData: async (req, res) => {
    const requestLocal = new RequestLocal();
    const response = await requestLocal.accumulateConsumptionData();
    res.json(response);
  },
  statisticsConsumptionData: async (req, res) => {
    const requestLocal = new RequestLocal(req.body);
    const response = await requestLocal.statisticsConsumptionData();
    res.json(response);
  },
  minutely: async (req, res) => {
    const requestLocal = new RequestLocal(req.body);
    const response = await requestLocal.sensorDataMinutely();

    res.json(response);
  },
  hourly: async (req, res) => {
    const requestLocal = new RequestLocal(req.body);
    const response = await requestLocal.sensorDataHourly();

    res.json(response);
  },
  daily: async (req, res) => {
    const requestLocal = new RequestLocal(req.body);
    const response = await requestLocal.sensorDataDaily();

    res.json(response);
  },
  monthly: async (req, res) => {
    const requestLocal = new RequestLocal(req.body);
    const response = await requestLocal.sensorDataMonthly();

    res.json(response);
  },
  yearly: async (req, res) => {
    const requestLocal = new RequestLocal(req.body);
    const response = await requestLocal.sensorDataYearly();

    res.json(response);
  },
  ecPhSetting: async (req, res) => {
    const requestLocal = new RequestLocal(req.body);
    const response = await requestLocal.ecPhSetting();
    res.json(response);
  },
  detailSetting: async (req, res) => {
    const requestLocal = new RequestLocal(req.body);
    const response = await requestLocal.detailSetting();
    res.json(response);
  },
  fanStatus: async (req, res) => {
    const requestLocal = new RequestLocal(req.body);
    const response = await requestLocal.fanStatus();
    res.json(response);
  },
  setAction: async (req, res) => {
    const requestLocal = new RequestLocal(req.body);
    const response = await requestLocal.setAction();
    res.json(response);
  },
  readAction: async (req, res) => {
    const requestLocal = new RequestLocal();
    const response = await requestLocal.readAction();
    res.json(response);
  },
};

const process = {
  tokenV1: (req, res) => {
    res.json("hello tokenV1");
  },
};

module.exports = { requestLocalServer, process };
