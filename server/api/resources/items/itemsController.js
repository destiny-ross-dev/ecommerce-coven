const getOne = (req, res) => {
  console.log("get one");
};
const getAll = (req, res) => {
  console.log("get all");
};

const createOne = (req, res) => {
  console.log("post one");
};

const updateOne = (req, res) => {
  console.log("update one");
};

const deleteOne = (req, res) => {
  console.log("delete one");
};

module.exports = {
  getOne,
  getAll,
  createOne,
  updateOne,
  deleteOne
};
