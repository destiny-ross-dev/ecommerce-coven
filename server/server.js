// IMPORTS

const express = require("express");
const config = require("./config");
const port = config.port || 3400;
const connect = require("./api/modules/db");
const setupMiddware = require("./middleware");
const itemsRouter = require("./api/resources/items/itemsRouter");
const authRouter = require("./api/resources/auth/authRouter");
const cartRouter = require("./api/resources/cart/cartRouter");

// Initializes express server
const app = express();

// Global middleware
setupMiddware(app);
app.use("/auth", authRouter);
app.use("/items", itemsRouter);
app.use("/cart", cartRouter);

const start = async () => {
  try {
    await connect(app);
    app.listen(port, () => {
      console.log(`rest api on http://localhost:${port}/`);
    });
  } catch (e) {
    console.log(e);
  }
};

module.exports = { start };
