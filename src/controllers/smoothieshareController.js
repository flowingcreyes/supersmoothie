const subjectQueries = require("../db/queries.subjects.js");
const smoothieshareQueries = require("../db/queries.smoothieshare.js");
const passport = require("passport");

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
    res.render("smoothieshare/new");
  },
  create(req, res, next) {
    let newSubject = {
      title: req.body.title,
      description: req.body.description
    };
    subjectQueries.createSubject(newSubject, (err, subject) => {
      if (err) {
        res.redirect(500, "smoothieshare/new");
      } else {
        res.redirect(303, `/smoothieshare/${subject.id}`);
      }
    });
  },
  show(req, res, body) {
    subjectQueries.getOneSubject(req.params.id, (err, subject) => {
      if (err || subject == null) {
        res.redirect(404, "/");
      } else {
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
    subjectQueries.deleteSubject(req.params.id, (err, subject) => {
      if (err) {
        res.redirect(500, `/smoothieshare/${subject.id}`);
      } else {
        res.redirect(303, "/smoothieshare");
      }
    });
  },
  edit(req, res, next) {
    subjectQueries.getSubjects(req.params.id, (err, subject) => {
      if (err || subject == null) {
        res.redirect(404, "/");
      } else {
        res.render("smoothieshare/edit", { subject });
      }
    });
  },
  update(req, res, next) {
    subjectQueries.updateSubject(req.params.id, req.body, (err, subject) => {
      if (err || subject == null) {
        res.redirect(404, `/smoothieshare/${req.params.id}/edit`);
      } else {
        res.redirect(`/smoothieshare/${subject.id}`);
      }
    });
  }
};
