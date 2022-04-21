const express = require("express");
const app = express();
const morgan = require("morgan");
const dotenv = require("dotenv");
const { wrongApproch } = require("./src/lib/middleware");

dotenv.config();

const index = require("./src/routes");

app.use(express.json());
app.use(morgan("dev"));

app.use("/api", index);

app.use(wrongApproch);

module.exports = app;
