const connection = require("./connection");

const connectionManager = (() => {
  let con = null;
  const createInstance = () => {
    return connection;
  };

  return {
    getInstance: () => {
      if (con == null) {
        console.log("Initializing Connection");
        con = createInstance();
      }
      return con;
    },
    validate: () => {
      return new Promise((resolve, reject) => {
        if (con == null) {
          con = connection;
        }
        con
          .authenticate()
          .then(() => {
            resolve(true);
          })
          .catch(() => {
            reject(false); //TODO Error logging
          });
      });
    },
  };
})();

module.exports = connectionManager;
