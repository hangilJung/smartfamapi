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
}

module.exports = RequestLocal;
