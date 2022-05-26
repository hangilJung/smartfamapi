const tt = require("../utils/time");
const ioList = require("./ioList");

function sensorConnection(sensor) {
  sensor.on("connection", (socket) => {
    // console.log(findIpAddress(socket));

    const list = ioList(sensor, socket);

    sentMessageToDeliverClient(list.sensorSpace.showMeTheData);
    sentMessageToDeliverClient(list.sensorSpace.sensorData);
    sentMessageToDeliverClient(list.sensorSpace.changeSensorData);
    socket.on("disconnet", (reason) => {
      console.log(reason);
    });
  });
}

function timeSocketioConnection(time) {
  time.on("connection", (socket) => {
    // console.log(findIpAddress(socket));

    socket.on("disconnet", (reason) => {
      console.log(reason);
    });

    setInterval(() => {
      socket.emit("time", tt());
    }, 1000);
  });
}

function mainSensorDataConnection(a) {
  a.on("connection", (socket) => {
    console.log(socket.id);

    socket.on("disconnet", (reason) => {
      console.log(reason);
    });

    const list = ioList(a, socket);

    socket.on("changeMainSensorData", (data) => {
      a.emit("main", data);
    });
    sentMessageToDeliverClient(list.mainSensorDataSpace.mainSensorData);
    sentMessageToDeliverClient(list.mainSensorDataSpace.showMeTheData);
  });
}

function nutrientData(a) {
  a.on("connection", (socket) => {
    console.log(socket.id);

    socket.on("disconnet", (reason) => {
      console.log(reason);
    });

    const list = ioList(a, socket);

    sentMessageToDeliverClient(
      list.nutrientData.requestNutricultureMachinePageData
    );
    sentMessageToDeliverClient(
      list.nutrientData.getNutricultureMachinePageData
    );
  });
}

function sentMessageToDeliverClient(list) {
  list["socket"].on(list.sentMsg, async (data) => {
    console.log(list.sentMsg, data);
    list["nameSpace"].emit(list.sendMsg, data);
  });
}

function findIpAddress(socket) {
  const req = socket.request;
  const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;

  return { ip, auth: socket.handshake.auth, id: socket.id };
}

module.exports = {
  sensorConnection,
  timeSocketioConnection,
  mainSensorDataConnection,
  nutrientData,
};
