const express = require("express");
const app = express();
const path = require("path");
var cors = require("cors");
var port = 3000 || process.env.port;
const bodyParser = require("body-parser");

require("dotenv/config");

app.use(cors());
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Server started on port: ${port} !!`);
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname + "/about.html"));
});
