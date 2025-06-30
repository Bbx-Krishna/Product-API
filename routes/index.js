const express = require('express');

const routes = express.Router();

routes.use("/", require("./products"));

console.log("Index routes");

module.exports = routes;