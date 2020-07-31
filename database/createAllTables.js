createTable = require("./createTable");

module.exports = function createAllTables(connection, models) {
  let PromiseList = [];
  models.forEach((element) => {
    model = require(element);
    PromiseList.push(createTable(model, connection));
  });

  Promise.all(PromiseList).then((values) => {
    connection.close();
  });
};
