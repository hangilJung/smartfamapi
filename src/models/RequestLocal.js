const urlList = require("./urlList");
const requestWithTokenAndData = require("../utils/requestWithTokenAndData");

class RequestLocal {
  constructor(body) {
    this.body = body;
  }

  async #localServerAccess(url, data) {
    try {
      const result = await requestWithTokenAndData(`${url}`, data);

      return result.data;
    } catch (error) {
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

    const result = await this.#localServerAccess(url, this.body);

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
}

module.exports = RequestLocal;
