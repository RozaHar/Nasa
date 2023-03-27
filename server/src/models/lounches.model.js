const launches = new Map();
let lastFlightNumber = 100;
const launch = {
  flightNumber: 100,
  mission: "Kepler Exploristion X",
  rocket: "Explorer IS",
  launchDate: new Date("December 27, 2030"),
  target: "Kepler-442 b",
  costumer: ["ZIM", "NASA"],
  upcoming: true,
  success: true,
};

launches.set(launch.flightNumber, launch);

function getAllLaunches() {
  return Array.from(launches.values());
}

function addNewLaunch(launch) {
  lastFlightNumber++;
  launches.set(
    lastFlightNumber,
    Object.assign(launch, {
      costumer: ["ZIM", "NASA"],
      upcoming: true,
      success: true,
      flightNumber: lastFlightNumber,
    })
  );
}

function existLaunch(launchId) {
  return launches.has(launchId);
}

function abortedLaunch(launchid) {
  const aborted = launches.get(launchid);
  aborted.upcoming = false;
  aborted.success = false;
  return aborted;
}

module.exports = {
  getAllLaunches,
  addNewLaunch,
  abortedLaunch,
  existLaunch,
};
