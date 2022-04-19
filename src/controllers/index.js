const RequestLocal = require("../models/RequestLocal");
const sensor = require("../utils/io");
const ioFn = require("../lib/ioFn");
const io = require("../utils/io");

const requestLocalServer = {
  loadSensorData: async (req, res) => {
    const requestLocal = new RequestLocal();
    const response = await requestLocal.loadSensorData();
    res.json(response);
  },
  mainSensorData: async (req, res) => {
    const requestLocal = new RequestLocal();
    const response = await requestLocal.mainSensorData();
    res.json(response);
  },
  emergency: async (req, res) => {
    const requestLocal = new RequestLocal();
    const response = await requestLocal.emergency();
    res.json(response);
  },
  login: async (req, res) => {
    const requestLocal = new RequestLocal(req.body);
    const response = await requestLocal.login();
    res.json(response);
  },
  loadActuatorRecord: async (req, res) => {
    const requestLocal = new RequestLocal(req.body);
    const response = await requestLocal.loadActuatorRecord();
    res.json(response);
  },
  operateSimpleActuator: async (req, res) => {
    const requestLocal = new RequestLocal(req.body);
    const response = await requestLocal.operateSimpleActuator();
    res.json(response);
  },
  operateNutrientSupply: async (req, res) => {
    const requestLocal = new RequestLocal(req.body);
    const response = await requestLocal.operateNutrientActuator();
    res.json(response);
  },
  operateNutrientStop: async (req, res) => {
    const requestLocal = new RequestLocal(req.body);
    const response = await requestLocal.operateNutrientStop();
    res.json(response);
  },
  minutes: async (req, res) => {
    const requestLocal = new RequestLocal(req.body);
    const response = await requestLocal.minutes();
    res.json(response);
  },
  days: async (req, res) => {
    const requestLocal = new RequestLocal(req.body);
    const response = await requestLocal.days();
    res.json(response);
  },
  hours: async (req, res) => {
    const requestLocal = new RequestLocal(req.body);
    const response = await requestLocal.hours();
    res.json(response);
  },
  months: async (req, res) => {
    const requestLocal = new RequestLocal(req.body);
    const response = await requestLocal.months();
    res.json(response);
  },
  years: async (req, res) => {
    const requestLocal = new RequestLocal(req.body);
    const response = await requestLocal.years();
    res.json(response);
  },
};

const process = {
  tokenV1: (req, res) => {
    res.json("hello tokenV1");
  },
};

module.exports = { requestLocalServer, process };
