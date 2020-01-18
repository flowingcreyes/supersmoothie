const pineappleSmoothies = require("./models").pineappleSmoothie;
const sequelize = require("../../src/db/models/index").sequelize;

module.exports = {
  retrievepineappleSmoothies(callback) {
    return pineappleSmoothies
      .findOne({
        order: [[sequelize.fn("RANDOM")]]
      })
      .then(pineappleSmoothies => {
        callback(null, pineappleSmoothies);
      })
      .catch(err => {
        callback(err);
      });
  }
};
