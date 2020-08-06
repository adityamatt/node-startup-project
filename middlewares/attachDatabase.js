attachDatabase = (connection) => {
  return (req, res, next) => {
    req.databaseConnection = connection;
    next();
  };
};

module.exports = attachDatabase;
