const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define(
    "tnp_login",
    {
      tnp_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      email: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
      },
      is_admin: {
        type: DataTypes.BOOLEAN,
      },
    },
    {
      freezeTableName: true,
    }
  );
};
