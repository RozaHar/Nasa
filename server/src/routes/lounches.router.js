const express = require("express");
const {
  httpGetLaunches,
  httpAddNewLaunch,
  httpAbortLaunch,
} = require("./lounches.controller");

const lounchesRouter = express.Router();

lounchesRouter.get("/", httpGetLaunches);
lounchesRouter.post("/", httpAddNewLaunch);
lounchesRouter.delete("/:id", httpAbortLaunch);

module.exports = lounchesRouter;
