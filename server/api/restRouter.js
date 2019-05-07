const express = require("express");
const itemsRouter = require("./resources/items");
const apiErrorHandler = require("./modules/errorHandler");

const restRouter = express.Router();

restRouter.use("/items", () => console.log("items"));

// module.exports = restRouter;
module.exports = restRouter;
