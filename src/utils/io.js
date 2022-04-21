const SocketIO = require("socket.io");
const ioFn = require("../lib/ioFn");
const { socketIOVerifyToken } = require("../lib/middleware");

module.exports = (server) => {
  const io = SocketIO(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });

  const sensor = io.of("/load-sensor-data");
  const time = io.of("/time");
  const mainSensorData = io.of("/main");

  sensor.use((socket, next) => {
    socketIOVerifyToken(socket, next);
  });

  ioFn.sensorConnection(sensor);
  ioFn.timeSocketioConnection(time);
  ioFn.mainSensorDataConnection(mainSensorData);
};
