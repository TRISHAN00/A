require("dotenv").config("../.env");
const express = require("express");
const middleware = require("./middleware");
const router = require("./routes");
const { notFoundHandler, errorHandler } = require("./error");
const myDB = require("../db/MyDB");

const app = express();

myDB.create("user 1", 10);
myDB.create("user 2", 10);
myDB.create("user 3", 10);
myDB.create("user 4", 10);
myDB.create("user 5", 10);
myDB.create("user 6", 10);

const bulk = myDB.bulkCreate("user 6", 10, 10);
console.log("Bulk", bulk);

const tickets = myDB.find();
console.log("All tickets", tickets);

const winners = myDB.draw(2);
console.log("Winners", winners);

app.use(middleware);
app.use(router);
app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;
