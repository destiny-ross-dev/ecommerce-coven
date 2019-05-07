const getItem = (req, res) => {
  console.log("get one");
};

const getInventory = (req, res) => {
  console.log("get all");
};

const createItem = (req, res) => {
  console.log("post one");
};

const updateItemById = (req, res) => {
  console.log("update one");
};

const deleteItemById = (req, res) => {
  console.log("delete one");
};

module.exports = {
  getItem,
  getInventory,
  createItem,
  updateItemById,
  deleteItemById
};
