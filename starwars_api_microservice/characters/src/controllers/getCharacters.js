const Character = require("../data");
const { response } = require("../utils");

//defino functions
module.exports = async(req, res) => {
  //recibe req - res controllador que se ejecutara en el endpoint
  const characters= await Character.list(); //controlador que simula ser un modelo de db hardcodeada
  // res.status(200).json(characters); 
  response(res, 200, characters)
};