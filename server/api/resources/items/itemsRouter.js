const { Router } = require("express");
const {
  getItem,
  getInventory,
  createItem,
  updateItemById,
  deleteItemById
} = require("./itemsController");

const itemsRouter = Router();

// /api/items
itemsRouter
  .route("/")
  .get(getInventory)
  .post(createItem);

// /api/items/:id
itemsRouter
  .route("/:id")
  .get(getItem)
  .put(updateItemById)
  .delete(deleteItemById);

module.exports = itemsRouter;
