const { Router } = require("express");
const {
  getOne,
  getAll,
  createOne,
  updateOne,
  deleteOne
} = require("./itemsController");

const itemsRouter = Router();

// /api/items
itemsRouter
  .route("/")
  .get(getAll)
  .post(createOne);

// /api/items/:id
itemsRouter
  .route("/:id")
  .get(getOne)
  .put(updateOne)
  .delete(deleteOne);

module.exports = itemsRouter;
