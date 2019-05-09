const Auth0Strategy = require("passport-auth0");

const { CLIENT_ID, CLIENT_SECRET, DOMAIN } = process.env;

const strategy = new Auth0Strategy(
  {
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    domain: DOMAIN,
    scope: "openid profile",
    callbackURL: "/auth"
  },
  function(accessToken, refreshToken, extraParams, profile, done) {
    return done(null, profile);
  }
);

const getUser = async (req, res) => {
  console.log(`user on req object`, req.user);
  try {
    let user = req.app.get("db").auth.getUserByAuthID(req.user.authid);
    console.log("user from database...");
    return res.status(200).json(user[0]);
  } catch (error) {
    console.log(err);
    res.status(400).end();
  }
};

const logout = (req, res) => {
  req.session.destroy(() => {
    res.redirect("http://localhost:3000/");
  });
};

module.exports = {
  strategy,
  getUser,
  logout
};
