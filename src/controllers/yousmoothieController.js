const strawberrySmoothieQueries = require("../db/queries.strawberrysmoothies.js");
const bananaSmoothieQueries = require("../db/queries.bananasmoothies.js");
const blueberrySmoothieQueries = require("../db/queries.blueberrysmoothies.js");

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
  }
};
