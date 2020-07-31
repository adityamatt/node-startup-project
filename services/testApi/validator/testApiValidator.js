const Joi = require("joi");

const bodySchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string()
    .regex(/[a-zA-Z0-9]{3,30}/)
    .required(),
  role: Joi.string().required(),
});
APIValidator = async function (req, res, next) {
  try {
    result = await bodySchema.validateAsync(req.body);
    next();
  } catch (err) {
    if (err.isJoi == true) {
      for (let i = 0; i < err.details.length; i++) {
        res.send(err.details[i].message);
      }

      // err.details.array.forEach((element) => {
      //   res.send(element.message);
      // });
      res.end();
    }
  }
};

module.exports = APIValidator;
