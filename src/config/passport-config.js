const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const Users = require("../db/models").User;
const authHelper = require("../auth/helpers");

module.exports = {
  init(app) {
    app.use(passport.initialize());
    app.use(passport.session());

    passport.use(
      new LocalStrategy(
        {
          usernameField: "email"
        },
        (email, password, done) => {
          Users.findOne({
            where: { email }
          }).then(user => {
            if (!user || !authHelper.comparePass(password, user.password)) {
              return done(null, false, {
                message: "Invalid email or password"
              });
            }
            return done(null, user);
          });
        }
      )
    );

    passport.serializeUser((user, callback) => {
      callback(null, user.id);
    });

    passport.deserializeUser((id, callback) => {
      Users.findByPk(id)
        .then(user => {
          callback(null, user);
        })
        .catch(err => {
          callback(err, user);
        });
    });
  }
};
