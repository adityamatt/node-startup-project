const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define(
    "employer_login",
    {
      employer_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      email: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
      },
    },
    {
      freezeTableName: true,
    }
  );
};
