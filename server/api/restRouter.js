import express from "express";
import { itemsRouter } from "./resources/items";
import { apiErrorHandler } from "./modules/errorHandler";

export const restRouter = express.Router();

restRouter.use("/items", itemsRouter);

restRouter.use(apiErrorHandler);
