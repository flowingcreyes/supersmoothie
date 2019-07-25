const strawberrySmoothies = require("./models").strawberrysmoothie;
const sequelize = require("../../src/db/models/index").sequelize;
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

module.exports = {
  retrieveStrawberrySmoothies(callback) {
    return strawberrySmoothies
      .findOne({
        order: [[sequelize.fn("RANDOM")]]
      })
      .then(strawberrySmoothies => {
        callback(null, strawberrySmoothies);
      })
      .catch(err => {
        callback(err);
      });
  }
};
