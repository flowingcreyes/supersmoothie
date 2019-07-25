const bananaSmoothies = require("./models").bananasmoothie;
const sequelize = require("../../src/db/models/index").sequelize;
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

module.exports = {
  retrieveBananaSmoothies(callback) {
    return bananaSmoothies
      .findOne({
        order: [[sequelize.fn("RANDOM")]]
      })
      .then(bananaSmoothies => {
        callback(null, bananaSmoothies);
      })
      .catch(err => {
        callback(err);
      });
  }
};
