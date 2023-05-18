const {catchedAsync} = require("../utils"); //para manejo de errores - haciendo que este presente en todas las f controladoras

//indice de los controladores de esta carpeta
module.exports ={
    getCharacters: catchedAsync(require("./getCharacters")),
    createCharacters: catchedAsync(require("./createCharacter")),
};