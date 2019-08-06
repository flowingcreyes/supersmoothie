const subjectQueries = require("../db/queries.subjects.js");
const smoothieshareQueries = require("../db/queries.smoothieshare.js");
const passport = require("passport");
const Authorizer = require("../policies/subjects");
const markdown = require("markdown").markdown;
const Users = require("../db/models").Users;

module.exports = {
  index(req, res, next) {
    subjectQueries.getSubjects((err, subjectItem) => {
      if (err) {
        res.redirect(500, "/");
      } else {
        res.render("smoothieshare/index", { subjectItem });
      }
    });
  },
  new(req, res, next) {
    const authorized = new Authorizer(req.user).new();
    if (authorized) {
      res.render("smoothieshare/new");
    } else {
      req.flash("notice", "You are not authorized to do that.");
      res.redirect("/smoothieshare");
    }
  },
  create(req, res, next) {
    const authorized = new Authorizer(req.user).create();
    if (authorized) {
      let newSubject = {
        title: req.body.title,
        description: req.body.description,
        userId: req.user.id
      };
      subjectQueries.createSubject(newSubject, (err, subject) => {
        if (err) {
          res.redirect(500, "smoothieshare/new");
        } else {
          res.redirect(303, `/smoothieshare/${subject.id}`);
        }
      });
    } else {
      req.flash("notice", "You are not authorized to do that.");
      res.redirect("/smoothieshare");
    }
  },
  show(req, res, body) {
    subjectQueries.getOneSubject(req.params.id, (err, subject) => {
      if (err || subject == null) {
        res.redirect(404, "/");
      } else {
        subject.description = markdown.toHTML(subject.description);
        res.render("smoothieshare/show", { subject });
      }
    });
  },
  signUp(req, res, body) {
    res.render("smoothieshare/signup");
  },
  createAccount(req, res, body) {
    let newUser = {
      email: req.body.email,
      password: req.body.password,
      passwordConfirmation: req.body.passwordConfirmation
    };
    smoothieshareQueries.createUser(newUser, (err, user) => {
      if (err) {
        req.flash("error", err);
        res.redirect("/smoothieshare/signup");
      } else {
        passport.authenticate("local")(req, res, () => {
          req.flash("notice", "Signed in successfully! Enjoy!");
          res.redirect("/smoothieshare");
        });
      }
    });
  },
  destroy(req, res, next) {
    subjectQueries.deleteSubject(req, (err, subject) => {
      if (err) {
        console.log(err);
        res.redirect(500, `/smoothieshare/${subject.id}`);
      } else {
        res.redirect(303, "/smoothieshare");
      }
    });
  },
  edit(req, res, next) {
    subjectQueries.getOneSubject(req.params.id, (err, subject) => {
      if (err || subject == null) {
        res.redirect(404, "/");
      } else {
        const authorized = new Authorizer(req.user, subject).edit();
        if (authorized) {
          res.render("smoothieshare/edit", { subject });
        } else {
          req.flash("You are not authorized to do that.");
          res.redirect("/smoothieshare");
        }
      }
    });
  },
  update(req, res, next) {
    subjectQueries.updateSubject(req, req.body, (err, subject) => {
      if (err || subject == null) {
        res.redirect(404, `/smoothieshare/${req.params.id}/edit`);
      } else {
        res.redirect(`/smoothieshare/${subject.id}`);
      }
    });
  },
  signInForm(req, res, next) {
    res.render("smoothieshare/signin");
  },
  signIn(req, res, next) {
    passport.authenticate("local")(req, res, function() {
      if (!req.user) {
        req.flash("notice", "Sign in failed! Try again!");
        res.redirect("/smoothieshare/signin");
      } else {
        req.flash("notice", "Success!");
        res.redirect("/");
      }
    });
  },
  signOut(req, res, next) {
    req.logout();
    req.flash("notice", "Signed out!");
    res.redirect("/");
  }
};
