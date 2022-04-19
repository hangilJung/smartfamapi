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
  };

  return list;
}
module.exports = list;
