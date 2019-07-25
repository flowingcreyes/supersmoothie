const blueberrySmoothies = require("./models").blueberrysmoothie;
const sequelize = require("../../src/db/models/index").sequelize;
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

module.exports = {
  retrieveBlueberrySmoothies(callback) {
    return blueberrySmoothies
      .findOne({
        order: [[sequelize.fn("RANDOM")]]
      })
      .then(blueberrySmoothies => {
        callback(null, blueberrySmoothies);
      })
      .catch(err => {
        callback(err);
      });
  }
};
