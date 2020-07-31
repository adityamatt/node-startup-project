testApiValidator = require("../../services/testApi/validator/testApiValidator");
testApiManager = require("../../services/testApi/manager/testApiManager");

class testApiController {
  static controller = (req, res) => {
    return testApiManager(req, res);
  };
  static validator = (req, res, next) => {
    return testApiValidator(req, res, next);
  };
}

module.exports = testApiController;
