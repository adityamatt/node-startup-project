require("../config/config");
const Database = require("./databaseClass");
const createAllTables = require("./createAllTables");
const { argv } = require("yargs");

//Force database creation;
let force = argv.force || false;

DatabaseInstance = new Database(gConfig.database);

DatabaseInstance.databaseExists(gConfig.database.name)
  .then((result, err) => {
    if (result) {
      console.log("DATBASE EXISTS", gConfig.database.name);
      if (force) {
        createAllTables(require("./connection"), require("./database.json"));
      }
    } else {
      DatabaseInstance.createDatabase(gConfig.database.name);
      createAllTables(require("./connection"), require("./database.json"));
    }
  })
  .then(() => {
    DatabaseInstance.close();
  });
