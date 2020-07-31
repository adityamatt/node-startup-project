let Sequelize = require("sequelize");

let connection = new Sequelize(
  gConfig.database.name,
  gConfig.database.user,
  gConfig.database.password,
  {
    host: gConfig.database.host,
    dialect: "mysql",
    pool: {
      max: 5,
      min: 1,
      idle: 10000,
    },
  }
);

connection
  .authenticate()
  .then(function (err) {
    console.log(
      "Connection has been established successfully to .",
      gConfig.database.name
    );
  })
  .catch(function (err) {
    console.log("Unable to connect to the database:", err);
    throw err;
  });

module.exports = connection;
