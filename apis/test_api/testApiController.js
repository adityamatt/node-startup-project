const testApiValidator = require("../../services/testApi/validator/testApiValidator");
const testApiManager = require("../../services/testApi/manager/testApiManager");

class testApiController {
  static controller = testApiManager;
  static validator = testApiValidator;
}

module.exports = testApiController;
