const { ClientError } = require("../utils/errors");

module.exports = (req, res, next) => {
  const { name } = req.body;
  if (name) return next();
  // else throw Error("Missing Character");
  else throw new ClientError("Error in the name-character", 401);
};
