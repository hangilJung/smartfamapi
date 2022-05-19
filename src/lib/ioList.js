function list(sensor, socket) {
  const list = {
    sensorSpace: {
      showMeTheData: {
        nameSpace: sensor,
        socket,
        sentMsg: "showMeTheData",
        sendMsg: "showMeTheData",
      },
      sensorData: {
        nameSpace: sensor,
        socket,
        sentMsg: "sensorData",
        sendMsg: "sensorData",
      },
      changeSensorData: {
        nameSpace: sensor,
        socket,
        sentMsg: "changeSensorData",
        sendMsg: "changeSensorData",
      },
    },
    mainSensorDataSpace: {
      mainSensorData: {
        nameSpace: sensor,
        socket,
        sentMsg: "main",
        sendMsg: "main",
      },
      showMeTheData: {
        nameSpace: sensor,
        socket,
        sentMsg: "requestData",
        sendMsg: "requestData",
      },
    },
    nutrientData: {
      requestNutricultureMachinePageData: {
        nameSpace: sensor,
        socket,
        sentMsg: "requestNutrientData",
        sendMsg: "requestNutrientData",
      },
      getNutricultureMachinePageData: {
        nameSpace: sensor,
        socket,
        sentMsg: "getNutrientData",
        sendMsg: "getNutrientData",
      },
    },
  };

  return list;
}
module.exports = list;
