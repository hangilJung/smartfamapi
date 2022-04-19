const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  let response = {
    header: {},
  };
  try {
    req.decoded = jwt.verify(req.headers.authorization, process.env.JWT_SECRET);

    return next();
  } catch (error) {
    // logger.error("verifyToken error message:", error);
    if (error.name === "TokenExpiredError") {
      return res
        .status(400)
        .json((response.header = headerStatusCode.tokenExpiredError));
    }
    response.header = headerStatusCode.invalidToken;

    return res.status(400).json(response);
  }
};

const socketIOVerifyToken = (socket, next) => {
  try {
    jwt.verify(socket.handshake.auth.key, process.env.JWT_SECRET);

    return next();
  } catch (error) {
    return next(new Error("authentication error"));
  }
};
module.exports = { verifyToken, socketIOVerifyToken };
