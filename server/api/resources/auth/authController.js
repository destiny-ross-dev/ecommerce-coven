const logout = (req, res) => {
  req.session.destroy(() => {
    res.redirect("http://localhost:3000/");
  });
};

const getUser = async (req, res) => {
  if (req.user && req.user.authid) {
    try {
      let user = await req.app.get("db").auth.getUserByAuthID(req.user.authid);
      res.status(200).send(user[0]);
    } catch (error) {
      res.status(500).send(error);
    }
  } else {
    console.log("unauthenticated");
  }
};

module.exports = { logout, getUser };
