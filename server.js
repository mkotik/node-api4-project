const express = require("express");
const cors = require("cors");
const server = express();
const path = require("path");
const { checkReqBody } = require("./server-middleware");

const users = [
  { username: "mkotik", password: "Marat" },
  { username: "abab", password: "Ashley" },
];

server.use(express.json());
server.use(cors());
server.use(express.static(path.join(__dirname, "client/build")));

server.get("/api/users", (req, res) => {
  res.status(200).json({ users: users });
});

server.post("/api/register", checkReqBody, (req, res) => {
  users.push(req.user);
  res.status(201).json(req.user);
});

server.post("/api/login", checkReqBody, (req, res) => {
  res.status(200).json({ message: `welcome ${req.user.username}` });
});

server.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html "));
});

module.exports = { server, users };
