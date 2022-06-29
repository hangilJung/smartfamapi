const SocketIO = require("socket.io");

module.exports = (server) => {
  const io = SocketIO(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });

  const sensor = io.of("/load-sensor-data");
  const time = io.of("/time");

  const nutrientData = io.of("/nutrient-data");

  const nutricultureMachinePage = io.of("/nutriculture-machine-page");

  nutricultureMachinePage.on("connection", (socket) => {
    console.log(socket.id);
    socket.on("controlMode", (data) => {
      console.log(data);
      nutricultureMachinePage.emit("controlMode", data);
    });
    socket.on("easySetting", (data) => {
      nutricultureMachinePage.emit("easySetting", data);
    });
    socket.on("detailSetting1", (data) => {
      console.log(data);
      nutricultureMachinePage.emit("detailSetting1", data);
    });
    socket.on("detailSetting2", (data) => {
      nutricultureMachinePage.emit("detailSetting2", data);
    });
    socket.on("detailSetting3", (data) => {
      nutricultureMachinePage.emit("detailSetting3", data);
    });
    socket.on("detailSetting4", (data) => {
      nutricultureMachinePage.emit("detailSetting4", data);
    });
    socket.on("detailSetting5", (data) => {
      nutricultureMachinePage.emit("detailSetting5", data);
    });
    socket.on("detailSetting6", (data) => {
      nutricultureMachinePage.emit("detailSetting6", data);
    });
    socket.on("detailSetting7", (data) => {
      nutricultureMachinePage.emit("detailSetting7", data);
    });
    socket.on("detailSetting8", (data) => {
      nutricultureMachinePage.emit("detailSetting8", data);
    });
    socket.on("detailSetting9", (data) => {
      nutricultureMachinePage.emit("detailSetting9", data);
    });
    socket.on("detailSetting10", (data) => {
      nutricultureMachinePage.emit("detailSetting10", data);
    });
    socket.on("detailSetting11", (data) => {
      nutricultureMachinePage.emit("detailSetting11", data);
    });
    socket.on("detailSetting12", (data) => {
      nutricultureMachinePage.emit("detailSetting12", data);
    });
    socket.on("detailSetting13", (data) => {
      nutricultureMachinePage.emit("detailSetting13", data);
    });
    socket.on("detailSetting14", (data) => {
      nutricultureMachinePage.emit("detailSetting14", data);
    });
    socket.on("detailSetting15", (data) => {
      nutricultureMachinePage.emit("detailSetting15", data);
    });
    socket.on("detailSetting16", (data) => {
      nutricultureMachinePage.emit("detailSetting16", data);
    });
    socket.on("detailSetting17", (data) => {
      nutricultureMachinePage.emit("detailSetting17", data);
    });
    socket.on("detailSetting18", (data) => {
      nutricultureMachinePage.emit("detailSetting18", data);
    });
    socket.on("detailSetting19", (data) => {
      nutricultureMachinePage.emit("detailSetting19", data);
    });
    socket.on("detailSetting20", (data) => {
      nutricultureMachinePage.emit("detailSetting20", data);
    });
    socket.on("detailSetting21", (data) => {
      nutricultureMachinePage.emit("detailSetting21", data);
    });
    socket.on("detailSetting22", (data) => {
      nutricultureMachinePage.emit("detailSetting22", data);
    });
    socket.on("detailSetting23", (data) => {
      nutricultureMachinePage.emit("detailSetting23", data);
    });
    socket.on("todaySupply", (data) => {
      nutricultureMachinePage.emit("todaySupply", data);
    });
    socket.on("insideSensorData", (data) => {
      nutricultureMachinePage.emit("insideSensorData", data);
    });
    socket.on("outsideSensorData", (data) => {
      nutricultureMachinePage.emit("outsideSensorData", data);
    });
    socket.on("detailSupplySetting", (data) => {
      nutricultureMachinePage.emit("detailSupplySetting", data);
    });
    socket.on("ecPhSetting", (data) => {
      console.log(data);
      nutricultureMachinePage.emit("ecPhSetting", data);
    });

    socket.on("disconnet", (reason) => {
      console.log(reason);
    });
  });

  const mainSensorData = io.of("/main");

  mainSensorData.on("connection", (socket) => {
    console.log(socket.id);

    socket.on("insideSensorData", (data) => {
      console.log(data);
      mainSensorData.emit("insideSensorData", data);
    });

    socket.on("outsideSensorData", (data) => {
      console.log(data);
      mainSensorData.emit("outsideSensorData", data);
    });

    socket.on("consumptionHourData", (data) => {
      console.log(data);
      mainSensorData.emit("consumptionHourData", data);
    });

    socket.on("consumptionAccumulatedDayData", (data) => {
      console.log(data);
      mainSensorData.emit("consumptionAccumulatedDayData", data);
    });

    socket.on("bedData", (data) => {
      console.log(data);
      mainSensorData.emit("bedData", data);
    });

    socket.on("disconnet", (reason) => {
      console.log(reason);
    });
  });
};
