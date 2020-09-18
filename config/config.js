const { argv } = require("yargs");
const config = require("./config.json");

let possibleEnvironments = Object.keys(config);
const defaultConfig = config.development;
let environment = argv.NODE_ENV || "development";
if (process.env.JEST_WORKER_ID != undefined) {
  environment = "testing";
}
if (!possibleEnvironments.includes(environment)) {
  console.log("NODE_ENV must be one of the ", possibleEnvironments);
  throw Error("Undefined NODE_ENV given");
}

const environmentConfig = config[environment];
let finalConfig = environmentConfig || defaultConfig;
if (process.env.PORT) {
  finalConfig.PORT = process.env.PORT;
}

// as a best practice
// all global variables should be referenced via global. syntax
// and their names should always begin with g
global.gConfig = finalConfig;

// log global.gConfig
console.log(
  "Running SERCICE->",
  finalConfig.ServiceName,
  " ENVIRONMENT ->",
  finalConfig.configId,
  " at port ",
  finalConfig.PORT
);
// console.log(
//   `global.gConfig: ${JSON.stringify(
//     global.gConfig,
//     undefined,
//     global.gConfig.json_indentation
//   )}`
// );
