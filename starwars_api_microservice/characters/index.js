const server = require("./src/server");

const PORT = 8001;//port

server.listen(PORT, () => {
    console.log(`Characters service listening on port ${PORT} :)`);
});