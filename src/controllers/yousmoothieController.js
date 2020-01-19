const strawberrySmoothieQueries = require("../db/queries.strawberrySmoothies.js");
const bananaSmoothieQueries = require("../db/queries.bananaSmoothies.js");
const blueberrySmoothieQueries = require("../db/queries.blueberrySmoothies.js");
const pineappleSmoothieQueries = require("../db/queries.pineappleSmoothies.js");
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

module.exports = {
  index(req, res, next) {
    res.render("yousmoothie/index.ejs");
  },

  blueberry(req, res, next) {
    blueberrySmoothieQueries.retrieveblueberrySmoothies(
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
    strawberrySmoothieQueries.retrievestrawberrySmoothies(
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
    bananaSmoothieQueries.retrievebananaSmoothies((err, bananaSmoothies) => {
      if (err) {
        console.log(err);
        res.redirect(500, "/");
      } else {
        res.render("yousmoothie/banana", { bananaSmoothies });
      }
    });
  },
  pineapple(req, res, next) {
    pineappleSmoothieQueries.retrievepineappleSmoothies(
      (err, pineappleSmoothies) => {
        if (err) {
          res.redirect(500, "/");
        } else {
          res.render("yousmoothie/pineapple", { pineappleSmoothies });
        }
      }
    );
  },
  email(req, res, next) {
    let email = req.body.emailaddress;
    let name = req.body.smoothie_name;
    let ingredients = req.body.smoothie_ingredients;
    let recipe = req.body.smoothie_recipe;
    let calories = req.body.smoothie_calories;
    let image = req.body.smoothie_image;
    const msg = {
      to: email,
      from: "supersmoothie@dontreply.com",
      subject: "SuperSmoothie",
      text: "Text",
      html: `
      <h2><strong>Smoothie Name:</strong> ${name}</h2><br><br>
      <h2><strong>Ingredients:</strong> ${ingredients}</h2><br><br>
      <h2><strong>Recipe:</strong> ${recipe}</h2><br><br>
    <h2><strong>Calories:</strong> ${calories}</h2><br><br>
                `
    };
    sgMail.send(msg).catch(err => {
      console.log(err);
    });
  }
};
