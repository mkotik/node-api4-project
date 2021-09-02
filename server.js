const express = require("express");
const cors = require("cors");
const server = express();
const path = require("path");

server.use(express.json());
server.use(cors());
server.use(express.static(path.join(__dirname, "client/build")));

server.get("/api", (req, res) => {
  res.status(200).json({ message: "welcome to the api" });
});

server.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

module.exports = server;
