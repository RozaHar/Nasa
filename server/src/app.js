const express = require("express");
const cors = require("cors");
const planetsRouter = require("./routes/planets.router");
const lounchesRouter = require("./routes/lounches.router");
const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json());

app.use("/planets", planetsRouter);
app.use("/launches", lounchesRouter);
module.exports = app;
