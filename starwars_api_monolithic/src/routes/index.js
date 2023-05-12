const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => res.status(200).send("Hello World"));
//enrutado - request segun ruta para las distintas entidades
router.use("/characters", require("./charactersRouter"));
router.use("/films", require("./filmsRouter"));
router.use("/planets", require("./planetsRouter"));

module.exports = router;
