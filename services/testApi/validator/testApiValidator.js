const Joi = require("joi");
const CONSTANTS = require("../../../config/constants");

const bodySchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string()
    .regex(/[a-zA-Z0-9]{3,30}/)
    .required(),
  role: Joi.string().required(),
});
const APIValidator = async function (req, res, next) {
  try {
    await bodySchema.validateAsync(req.body);
    next();
  } catch (err) {
    let message = "";
    res.status(CONSTANTS.RESPONSE_CODES.BAD_REQUEST);
    if (err.isJoi == true) {
      for (let i = 0; i < err.details.length; i++) {
        if (
          err.details[i].message.includes("fails to match the required pattern")
        ) {
          message += " " + i + " Invalid AccessToken. ";
        } else {
          message += " " + i + err.details[i].message + " ";
        }
      }
      res.json({ message: message });
    }
  }
};

module.exports = APIValidator;
