const { Router } = require("express");
const { addToCart, getCart, removeFromCart } = require("./cartController");

const authRouter = Router();

//AUTH ENDPOINTS
// GET /cart
authRouter
  .route(`/`)
  .get(getCart)
  .post(addToCart)
  .delete(removeFromCart);

// GET /auth/logout

module.exports = authRouter;
