const express = require("express");
const helmet = require("helmet");

const AuthRouter = require('../auth/authrouter');
const UsersRouter = require('../users/usersrouter');




const server = express();

server.use(helmet());
server.use(express.json());
server.use("/api/auth", AuthRouter);
server.use("/api/users", UsersRouter);



server.get("/", (req, res) => {
  res.json({ api: "up" });
});

module.exports = server;
