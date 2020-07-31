//Returns Promise of creating table->Model
module.exports = function createTable(model, connection) {
  return new Promise((resolve, reject) => {
    modelInstance = model(connection);
    return resolve(modelInstance.sync({ force: true }));
  });
};
