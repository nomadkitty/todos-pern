const express = require("express");
const server = express();
const cors = require("cors");
const helmet = require("helmet");

// routers
const todoRouter = require("./todos/todos-router");

// middleware
server.use(cors());
server.use(helmet());
server.use(express.json());

server.use("/api/todos", todoRouter);

server.get("/", (req, res) => {
  res.status(200).json({ api: "server is up and running" });
});

module.exports = server;
