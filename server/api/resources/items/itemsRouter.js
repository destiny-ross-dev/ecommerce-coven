const { Router } = require("express");
const {
  getItem,
  getInventory,
  createItem,
  updateItemById,
  deleteItemById,
  getCategoryList,
  getCategoryInfo
} = require("./itemsController");

const itemsRouter = Router();

// api/items/categories
itemsRouter.route("/categories").get(getCategoryList);

// api/items/categories/:id
itemsRouter.route("/categories/:category_url").get(getCategoryInfo);

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
