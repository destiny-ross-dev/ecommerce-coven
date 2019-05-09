const bodyParser = require("body-parser");
const logger = require("morgan-body");
const cors = require("cors");
const passport = require("passport");
const session = require("express-session");

const { strategy } = require("./api/modules/auth");

const setGlobalMiddleware = app => {
  // parses url-encoded data (parameters) with the querystring library when true.
  app.use(bodyParser.urlencoded({ extended: false }));

  // Parses req.body, making it readable on the request object
  app.use(bodyParser.json());

  // Enables Cross Origin Resource Sharing
  app.use(cors());

  //Logging middleware for request and response bodies
  logger(app);

  app.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 1000000 * 60 * 60 * 24 * 14
      }
    })
  );

  app.use(passport.initialize());
  app.use(passport.session());
  passport.use(strategy);

  passport.serializeUser((user, done) => {
    // console.log(user);
    app
      .get("db")
      .auth.getUserByAuthID(user.id)
      .then(response => {
        console.log("this is response", response);
        if (!response[0]) {
          app
            .get("db")
            .auth.addUserByAuthID([
              user.id,
              user.name.givenName,
              user.name.familyName
            ])
            .then(res => {
              return done(null, res[0]);
            })
            .catch(err => console.log(err));
        } else {
          return done(null, response[0]);
        }
      })
      .catch(err => console.log(err));
  });
  passport.deserializeUser((user, done) => {
    return done(null, user);
  });
};

module.exports = setGlobalMiddleware;
