const express = require('express');

const server = express();
const mw = require("./middleware/middleware");
const userRouter = require("./users/users-router");

// ekspres'in varsayılan olarak istek gövdelerinde JSON'u ayrıştıramayacağını unutmayın

// global ara yazılımlar ve kullanıcı routelarının buraya bağlanması gerekir

server.use(express.json());
server.use(mw.logger);

server.use("/api/users",userRouter);

server.get('/', (req, res) => {
  res.send(`<h2>Biraz ara yazılım yazalım!</h2>`);
});


module.exports = server;
