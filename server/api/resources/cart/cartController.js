const getCart = (req, res) => {
  console.log("get cart");
};

const addToCart = (req, res) => {
  let { itemId } = req.body;
  console.log("add item to cart", itemId);
};

const removeFromCart = (req, res) => {
  let { itemId } = req.body;
  console.log("remove item from cart:", itemId);
};

const getAllOrders = (req, res) => {
  console.log("get all past orders");
};

const getOrderByID = (req, res) => {
  let { orderId } = req.body;
  console.log("get order by id:", orderId);
};

module.exports = {
  getCart,
  addToCart,
  removeFromCart,
  getAllOrders,
  getOrderByID
};
