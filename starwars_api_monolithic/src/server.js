const express = require("express");
const morgan = require("morgan");

const server = express(); //servidor de express
//middlewares
server.use(express.json());
server.use(morgan("dev"));

server.use(require("./routes"));//roter a enrutado

module.exports = server;
