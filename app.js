const express = require("express");
const app = express();
const morgan = require("morgan");
const dotenv = require("dotenv");
const { wrongApproch } = require("./src/lib/middleware");
const helmet = require("helmet");
const hpp = require("hpp");

dotenv.config();

const index = require("./src/routes");

app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(morgan("combined"));
  app.use(helmet({ contentSecurityPolicy: false }));
  app.use(hpp());
} else {
  app.use(morgan("dev"));
}

app.use("/api", index);

app.use(wrongApproch);

module.exports = app;
