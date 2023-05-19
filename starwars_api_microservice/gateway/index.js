// const express = require("express");
// const morgan = require("morgan");
// const { createProxyMiddleware } = require("http-proxy-middleware");

// const app = express();
// app.use(morgan("dev"));

// app.use(
//   "/characters",
//   createProxyMiddleware({
//     target: "http:localhost:8001", //a donde escucha la app
//     changeOrigin: true, //indica que a partir de aca cambian los headers de la request
//   })
// );

// app.listen(8000, () => {
//   console.log("Gateway on port 8000");
// });
const express = require("express");
const {createProxyMiddleware} = require("http-proxy-middleware");

const app = express();

app.use("/characters", 
createProxyMiddleware({
	target:"http://characters:8001",
	changeOrigin:true
})
);
app.use("/films", 
createProxyMiddleware({
	target:"http://films:8002",
	changeOrigin:true
})
);
app.use("/planets", 
createProxyMiddleware({
	target:"http://planets:8003",
	changeOrigin:true
})
);


app.listen(8000)