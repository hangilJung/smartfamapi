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
};

const process = {
  tokenV1: (req, res) => {
    res.json("hello tokenV1");
  },
};

module.exports = { requestLocalServer, process };
