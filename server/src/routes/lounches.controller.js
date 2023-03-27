const {
  getAllLaunches,
  addNewLaunch,
  existLaunch,
  abortedLaunch,
} = require("../models/lounches.model");

function httpGetLaunches(req, res) {
  res.status(200).json(getAllLaunches());
}

function httpAddNewLaunch(req, res) {
  const launch = req.body;
  if (
    !launch.mission ||
    !launch.rocket ||
    !launch.launchDate ||
    !launch.target
  ) {
    return res.status(404).json({
      error: "error not launch",
    });
  }
  launch.launchDate = new Date(launch.launchDate);

  if (launch.launchDate == "Invalid Date") {
    return res.status(404).json({
      error: "error not Date",
    });
  }

  addNewLaunch(launch);
  return res.status(200).json(launch);
}

function httpAbortLaunch(req, res) {
  const launchid = +req.params.id;
  if (!existLaunch(launchid)) {
    return res.status(404).json({
      error: "not launch id",
    });
  }

  const aborted = abortedLaunch(launchid);
  return res.status(200).json(aborted);
}

module.exports = { httpGetLaunches, httpAddNewLaunch, httpAbortLaunch };
