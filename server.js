const express = require("express");
const bodyParser = require("body-parser");
const server = express();
const cors = require("cors");
const path = require("path");

server.use(cors());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());


server.use(express.static("./views"));

server.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./", "views", "index.html"));
});
// server config and come to live
server.listen(process.env.PORT || 3000, () => {
  console.log("Server is listening 🔥🔥🔥");
});
