const express = require("express");
const cors = require("cors");
const cookies = require("cookie-parser")
require("dotenv").config();
const { setupRoutes } = require("./src/routes/index.routes");
const port = process.env.PORT;

const server = express();

server.use(express.json());

server.use(
  cors({
    origin: "http://localhost:5173",
  })
);

server.use(cookies())

setupRoutes(server);

server.listen(port, () => {
  console.log("server is listening on port ", port);
});
