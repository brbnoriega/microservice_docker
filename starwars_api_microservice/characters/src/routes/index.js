//ACA DEFINIMOS LAS RUTAS
const {Router} = require("express");
const controllers = require('../controllers')// lo requiero una sola vez y en las request uso lo que necesito

const router = Router();

//capas por donde pasa nuestras requests-
router.get("/", controllers.getCharacters); //indico la callback que se ejecuta - el controlador con el que trabajo
router.post("/", controllers.createCharacters); 
module.exports = router;