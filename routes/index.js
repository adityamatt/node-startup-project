const router = require("express").Router();
/**
 * Include all the routers in this index
 */

const testRouter = require("./testRoute");
//testValidator = require("../apis/validator/test_api");

router.use("/test", testRouter);

/* GET home page. */
router
  .post("/", function (req, res, next) {
    res.render("index", { title: "Express" });
  })
  .get("/", function (req, res, next) {
    res.render("index", { title: "Express" });
  });

module.exports = router;
