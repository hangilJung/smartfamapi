class SocketioConnection {
  constructor(body) {
    this.body = body;
  }

  connectSocketio(namespace) {
    namespace.on("connection", (socket) => {
      const req = socket.request;
      const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;

      socket.on("disconnet", (reason) => {
        console.log(reason);
      });
    });
  }

  sentMessageToDeliverClient(nameSpace, socket, msg1, msg2) {
    socket.on(msg1, (data) => {
      nameSpace.emit(msg2, data);
    });
  }
}

module.exports = SocketioConnection;
