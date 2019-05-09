const passport = require("passport");
const { Router } = require("express");
const { logout } = require("./authController");

const authRouter = Router();

//AUTH ENDPOINTS
// GET /auth
authRouter.route(`/`).get(
  passport.authenticate("auth0", {
    successRedirect: "http://localhost:3000/",
    failureRedirect: "http://localhost:3123/auth"
    // successRedirect: "http://shopdogletics.destinylross-apps.com",
    // failureRedirect: "http://shopdogletics.destinylross-apps.com/auth"
  })
);

// GET /auth/logout
authRouter.route("/logout").get(logout);

//AUTH ENDPOINTS

module.exports = authRouter;
