const bodyParser = require("body-parser");
const logger = require("morgan-body");
const cors = require("cors");

const setGlobalMiddleware = app => {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(cors());
  logger(app);
};

module.exports = setGlobalMiddleware;
