const express = require("express");
const app = express();
const morgan = require("morgan");
const dotenv = require("dotenv");
const { wrongApproch } = require("./src/lib/middleware");
const helmet = require("helmet");
const hpp = require("hpp");
const path = require("path");
const cors = require("cors");

dotenv.config();

const index = require("./src/routes");
const react = require("./src/routes/react");

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "public/build")));

if (process.env.NODE_ENV === "production") {
  app.use(morgan("combined"));
  app.use(helmet());
  app.use(hpp());
} else {
  app.use(morgan("dev"));
}

app.use("/api", index);
app.use("/", react);

app.use(wrongApproch);

module.exports = app;
