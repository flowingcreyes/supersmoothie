const strawberrySmoothieQueries = require("../db/queries.strawberrysmoothies.js");
const bananaSmoothieQueries = require("../db/queries.bananasmoothies.js");
const blueberrySmoothieQueries = require("../db/queries.blueberrysmoothies.js");
const pineappleSmoothieQueries = require("../db/queries.pineapplesmoothies.js");
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

module.exports = {
  index(req, res, next) {
    res.render("yousmoothie/index");
  },

  blueberry(req, res, next) {
    blueberrySmoothieQueries.retrieveBlueberrySmoothies(
      (err, blueberrySmoothies) => {
        if (err) {
          res.redirect(500, "/");
        } else {
          res.render("yousmoothie/blueberry", { blueberrySmoothies });
        }
      }
    );
  },

  strawberry(req, res, next) {
    strawberrySmoothieQueries.retrieveStrawberrySmoothies(
      (err, strawberrySmoothies) => {
        if (err) {
          res.redirect(500, "/");
        } else {
          res.render("yousmoothie/strawberry", { strawberrySmoothies });
        }
      }
    );
  },

  banana(req, res, next) {
    bananaSmoothieQueries.retrieveBananaSmoothies((err, bananaSmoothies) => {
      if (err) {
        res.redirect(500, "/");
      } else {
        res.render("yousmoothie/banana", { bananaSmoothies });
      }
    });
  },
  pineapple(req, res, next) {
    pineappleSmoothieQueries.retrievePineappleSmoothies(
      (err, pineappleSmoothies) => {
        if (err) {
          res.redirect(500, "/");
        } else {
          res.render("yousmoothie/pineapple", { pineappleSmoothies });
        }
      }
    );
  },
  email(req, res, next){
        const msg = {
              to: "cmreyesqla598@gmail.com",
            from: "donotreply@example.com",
            subject: "Hello!",
              text: "Welcome to Super Smoothie!",
              html: "<strong>Here!!</strong>"
             };
       sgMail.send(msg)
  }
};
