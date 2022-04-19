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
      time.emit("time", tt());
    }, 1000);
  });
}

function sentMessageToDeliverClient(list) {
  list["socket"].on(list.sentMsg, (data) => {
    console.log(data);
    list["nameSpace"].emit(list.sendMsg, data);
  });
}

function findIpAddress(socket) {
  const req = socket.request;
  const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;

  return { ip, auth: socket.handshake.auth, id: socket.id };
}

module.exports = { sensorConnection, timeSocketioConnection };
