const characters = require('./characters.json'); //trae en forma de {}

module.exports = { //funciones que simularan ser el modelo
list: async() => { //async
    return characters;
},

//manejo de errores al momento de crear el personaje
create:async()=>{//crea registro en la db
    throw Error("There are a error in your created character")
}
}