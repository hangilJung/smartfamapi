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
  const nutrientData = io.of("/nutrient-data");
  const controlMode = io.of("/control-mode");
  const easySetting = io.of("/easy-setting");
  const detail1 = io.of("/detail-setting-1");
  const detail2 = io.of("/detail-setting-2");
  const detail3 = io.of("/detail-setting-3");
  const detail4 = io.of("/detail-setting-4");
  const detail5 = io.of("/detail-setting-5");
  const detail6 = io.of("/detail-setting-6");
  const detail7 = io.of("/detail-setting-7");
  const detail8 = io.of("/detail-setting-8");
  const detail9 = io.of("/detail-setting-9");
  const detail10 = io.of("/detail-setting-10");
  const detail11 = io.of("/detail-setting-11");
  const detail12 = io.of("/detail-setting-12");
  const detail13 = io.of("/detail-setting-13");
  const detail14 = io.of("/detail-setting-14");
  const detail15 = io.of("/detail-setting-15");
  const detail16 = io.of("/detail-setting-16");
  const detail17 = io.of("/detail-setting-17");
  const detail18 = io.of("/detail-setting-18");
  const detail19 = io.of("/detail-setting-19");
  const detail20 = io.of("/detail-setting-20");
  const detail21 = io.of("/detail-setting-21");
  const detail22 = io.of("/detail-setting-22");
  const detail23 = io.of("/detail-setting-23");

  sensor.use((socket, next) => {
    socketIOVerifyToken(socket, next);
  });

  ioFn.sensorConnection(sensor);
  ioFn.timeSocketioConnection(time);
  ioFn.mainSensorDataConnection(mainSensorData);
  ioFn.nutrientData(nutrientData);
};
