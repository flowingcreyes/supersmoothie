const bananaSmoothies = require("./models").bananasmoothie;
const sequelize = require("../../src/db/models/index").sequelize;

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
