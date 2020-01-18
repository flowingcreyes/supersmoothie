const bananaSmoothies = require("./models").bananaSmoothie;
const sequelize = require("../../src/db/models/index").sequelize;

module.exports = {
  retrievebananaSmoothies(callback) {
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
