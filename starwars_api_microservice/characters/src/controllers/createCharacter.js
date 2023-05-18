const Character = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => { //al ser ASYNC express no lo atrapa por default al error
  const newCharacter = await Character.create();
  response(res, 201, newCharacter);

  // res.status(400).json({ error: error.message }); //error
};
