const characters = require('./characters.json'); //trae en forma de {}

module.exports = { //funciones que simularan ser el modelo
list: async() => { //async
    return characters;
},
}