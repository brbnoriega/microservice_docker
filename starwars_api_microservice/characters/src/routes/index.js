//ACA DEFINIMOS LAS RUTAS
const { Router } = require("express");
const controllers = require("../controllers"); // lo requiero una sola vez y en las request uso lo que necesito
const middlewares = require("../middlewares"); //valida si hay error -

const router = Router();

//capas por donde pasa nuestras requests-
router.get("/characters", controllers.getCharacters); //indico la callback que se ejecuta - el controlador con el que trabajo
router.post("/characters", middlewares.characterValidation, controllers.createCharacters);
module.exports = router;

