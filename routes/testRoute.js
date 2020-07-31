var router = require("express").Router();
const testApiController = require("../apis/test_api/testApiController");

router
  .route("/TestPath")
  .post(testApiController.validator, (req, res) => {
    testApiController.controller(req, res);
  })
  .get((req, res) => {
    res.end("This API is for POST request only");
  });

module.exports = router;
