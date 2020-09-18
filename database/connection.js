const Sequelize = require("sequelize");

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
module.exports = connection;
