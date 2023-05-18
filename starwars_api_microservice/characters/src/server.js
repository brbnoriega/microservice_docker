const express = require("express");
const morgan = require("morgan");
// const router = require("./routes");

const server = express();

server.use(morgan("dev"));
server.use(express.json());

server.use("/", require("./routes")); //usa lo que venga de routes

server.use("*", (req, res) => {
  res.status(404).send("Not Found");
});

//para sobreescribir manejador de errores de express
server.use((err, req, res, next) => {
  // res.send("This is a control msn for errors")
  res.status(err.statusCode || 500).send({//manejador de errores
    error: true,
    message: err.message,
  });
}); 

module.exports = server;
