const urlList = require("./urlList");
const requestWithTokenAndData = require("../utils/requestWithTokenAndData");
const logger = require("../config/logger");

class RequestLocal {
  constructor(body) {
    this.body = body;
  }

  async #localServerAccess(url, data) {
    try {
      const result = await requestWithTokenAndData(`${url}`, data);

      return result.data;
    } catch (error) {
      logger.error(
        `src/models/RequestLocal.js function #localServerAccess() error : ${
          error ?? "not load error contents"
        }`
      );
      return "WoW!!! It is Error!";
    }
  }

  async reRequestData() {
    const { url, startDate, endDate } = this.body;
    const data = { startDate, endDate };

    console.log(`데이터들  ${url}, ${data}`);

    return this.#localServerAccess(url, data);
  }

  async reRequestSimple() {
    const { url, deviceName, active } = this.body;
    const data = { deviceName, active };

    return this.#localServerAccess(url, data);
  }

  async loadSensorData() {
    const url = urlList.loadSensorData;

    return this.#localServerAccess(url, null);
  }

  async login() {
    const url = urlList.login;

    return this.#localServerAccess(url, this.body);
  }

  async operateSimpleActuator() {
    const url = urlList.operateSimpleActuator;

    return this.#localServerAccess(url, this.body);
  }

  async operateNutrientActuator() {
    const url = urlList.operateNutrientActuator;

    return this.#localServerAccess(url, this.body);
  }

  async operateNutrientStop() {
    const url = urlList.operateNutrientStop;

    return this.#localServerAccess(url, this.body);
  }

  async loadActuatorRecord() {
    const url = urlList.loadActuatorRecord;

    return this.#localServerAccess(url, this.body);
  }

  async emergency() {
    const url = urlList.emergency;

    return this.#localServerAccess(url, this.body);
  }

  async mainInsideSensorData() {
    const url = urlList.mainInside;

    return this.#localServerAccess(url, this.body);
  }

  async mainOutsideSensorData() {
    const url = urlList.mainOutside;

    return this.#localServerAccess(url, this.body);
  }

  async minutes() {
    const url = urlList.minutes;

    return this.#localServerAccess(url, this.body);
  }

  async hours() {
    const url = urlList.hours;

    return this.#localServerAccess(url, this.body);
  }

  async months() {
    const url = urlList.months;

    return this.#localServerAccess(url, this.body);
  }

  async days() {
    const url = urlList.days;

    return this.#localServerAccess(url, this.body);
  }

  async years() {
    const url = urlList.years;

    return this.#localServerAccess(url, this.body);
  }

  async update() {
    const url = urlList.update;

    return this.#localServerAccess(url, this.body);
  }

  async loadNutrientData() {
    const url = urlList.loadNutrientData;

    return this.#localServerAccess(url, this.body);
  }

  async readBedData() {
    const url = urlList.bedData;

    return this.#localServerAccess(url, this.body);
  }

  async start() {
    const url = urlList.start;

    return this.#localServerAccess(url, this.body);
  }

  async stop() {
    const url = urlList.stop;

    return this.#localServerAccess(url, this.body);
  }

  async nutriculatureMachineStatus() {
    const url = urlList.nutricultureMachineStatus;

    return this.#localServerAccess(url, this.body);
  }

  async easySelection() {
    const url = urlList.easySelection;

    return this.#localServerAccess(url, this.body);
  }

  async detailSelection() {
    const url = urlList.detailSelection;

    return this.#localServerAccess(url, this.body);
  }

  async easySetting() {
    const url = urlList.easySetting;

    return this.#localServerAccess(url, this.body);
  }

  async detailSettingTime() {
    const url = urlList.detailSettingTime;

    return this.#localServerAccess(url, this.body);
  }

  async detailSettingMatter() {
    const url = urlList.detailSettingMatter;

    return this.#localServerAccess(url, this.body);
  }

  async detailSettingIsUse() {
    const url = urlList.detailSettingIsUse;

    return this.#localServerAccess(url, this.body);
  }

  async detailSettingTrayIsUse() {
    const url = urlList.detailSettingTrayIsUse;

    return this.#localServerAccess(url, this.body);
  }

  async detailSupplySetting() {
    const url = urlList.detailSupplySetting;

    return this.#localServerAccess(url, this.body);
  }

  async hourConsumptionData() {
    const url = urlList.hourConsumptionData;

    return this.#localServerAccess(url, this.body);
  }

  async dayConsumptionData() {
    const url = urlList.dayConsumptionData;

    return this.#localServerAccess(url, this.body);
  }

  async monthConsumptionData() {
    const url = urlList.monthConsumptionData;

    return this.#localServerAccess(url, this.body);
  }

  async yearConsumptionData() {
    const url = urlList.yearConsumptionData;

    return this.#localServerAccess(url, this.body);
  }

  async accumulateConsumptionData() {
    const url = urlList.accumulateConsumptionData;

    return this.#localServerAccess(url, this.body);
  }

  async statisticsConsumptionData() {
    const url = urlList.statisticsConsumptionData;

    return this.#localServerAccess(url, this.body);
  }

  async sensorDataMinutely() {
    const url = urlList.sensorDataMinutely;

    return this.#localServerAccess(url, this.body);
  }

  async sensorDataHourly() {
    const url = urlList.sensorDataHourly;

    return this.#localServerAccess(url, this.body);
  }

  async sensorDataDaily() {
    const url = urlList.sensorDataDaily;

    return this.#localServerAccess(url, this.body);
  }

  async sensorDataMonthly() {
    const url = urlList.sensorDataMonthly;

    return this.#localServerAccess(url, this.body);
  }

  async sensorDataYearly() {
    const url = urlList.sensorDataYearly;

    return this.#localServerAccess(url, this.body);
  }

  async ecPhSetting() {
    const url = urlList.ecPhSetting;

    return this.#localServerAccess(url, this.body);
  }
}

module.exports = RequestLocal;
