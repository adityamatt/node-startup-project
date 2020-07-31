// requires
const _ = require("lodash");
const { argv } = require("yargs");
const config = require("./config.json");

let possibleEnvironments = Object.keys(config);
const defaultConfig = config.development;
const environment = argv.NODE_ENV || "development";

if (!possibleEnvironments.includes(environment)) {
  console.log("NODE_ENV must be one of the ", possibleEnvironments);
  throw Error("Undefined NODE_ENV given");
}

const environmentConfig = config[environment];
const finalConfig = environmentConfig || defaultConfig;

// as a best practice
// all global variables should be referenced via global. syntax
// and their names should always begin with g
global.gConfig = finalConfig;

// log global.gConfig
console.log(
  "Running SERCICE->",
  finalConfig.ServiceName,
  " ENVIRONMENT ->",
  finalConfig.configId
);
// console.log(
//   `global.gConfig: ${JSON.stringify(
//     global.gConfig,
//     undefined,
//     global.gConfig.json_indentation
//   )}`
// );
