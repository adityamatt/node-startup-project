class databaseManager {
  constructor() {
    this.connection = require("./connection");
  }
  validate() {
    return new Promise((resolve, reject) => {
      this.connection
        .authenticate()
        .then(function (err) {
          resolve(true);
        })
        .catch(function (err) {
          reject(false); //TODO Error logging
        });
    });
  }
  getConnection() {
    return this.connection;
  }
}
module.exports = databaseManager;
