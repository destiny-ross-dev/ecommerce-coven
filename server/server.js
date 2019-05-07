// const express = require("express");
// const setupMiddware = require("./middleware");
// // import { restRouter, graphQLRouter } from "./api";
// const connect = require("./api/modules/db");
// // import { signin, protect } from "./api/modules/auth";
// const restRouter = require("./api");
// // Declare an app from express
// const app = express();

// const apiRouter = express.Router();

// //api Router is mounted at /api (below);
// apiRouter.use("/", restRouter);

// setupMiddware(app);

// connect(app);

// // API

// app.all("*", (req, res) => {
//   res.json({ ok: true });
// });

// module.exports = app;

const express = require("express");
const { json, urlencoded } = require("body-parser");
const config = require("./config");
const port = config.port || 3400;
const connect = require("./api/modules/db");
const cors = require("cors");
const itemsRouter = require("./api/resources/items/itemsRouter");

const setupMiddware = require("./middleware");

const app = express();

setupMiddware(app);
app.use("/items", itemsRouter);

const start = async () => {
  try {
    await connect(app);
    app.listen(port, () => {
      console.log(`rest api on localhost:${port}/api`);
    });
  } catch (e) {
    console.log(e);
  }
};

module.exports = { start };
