const getItem = async (req, res) => {
  console.log("get one");
};

const getInventory = async (req, res) => {
  console.log("get all");
};

const createItem = async (req, res) => {
  console.log("post one");
};

const updateItemById = async (req, res) => {
  console.log("update one");
};

const deleteItemById = async (req, res) => {
  console.log("delete one");
};

const getCategoryList = async (req, res) => {
  try {
    let catList = await req.app.get("db").items.getCategoryList();
    res.status(200).send(catList);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getItem,
  getInventory,
  createItem,
  updateItemById,
  deleteItemById,
  getCategoryList
};
