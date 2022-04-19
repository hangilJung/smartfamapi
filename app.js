const express = require("express");
const app = express();
const morgan = require("morgan");
const dotenv = require("dotenv");
const headerStatusCode = require("./src/utils/headerStatusCode");

dotenv.config();

const index = require("./src/routes");

app.use(express.json());
app.use(morgan("dev"));

app.use("/api", index);

app.use((req, res) => {
  const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;

  let response = {
    header: {},
  };

  console.log(`접속 아이피 : ${ip}`);
  response.header = headerStatusCode.httpError;
  response.header.receiveMethodAndUrl = `${req.method} ${req.url}`;

  res.json(response);
});

module.exports = app;
