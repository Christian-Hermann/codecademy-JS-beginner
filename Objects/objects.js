// Accsessing properties
let spaceship = {
  homePlanet: "Earth",
  color: "silver",
  "Fuel Type": "Turbo Fuel",
  numCrew: 5,
  flightPath: ["Venus", "Mars", "Saturn"],
};

let crewCount = spaceship.numCrew;

let planetArray = spaceship.flightPath;

// Property Assignment
let spaceship = {
  "Fuel Type": "Turbo Fuel",
  homePlanet: "Earth",
  color: "silver",
  "Secret Mission": "Discover life outside of Earth.",
};

spaceship.color = "glorious gold";

spaceship.numEngines = 8;

delete spaceship["Secret Mission"];
