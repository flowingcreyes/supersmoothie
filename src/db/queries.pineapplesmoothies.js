const pineappleSmoothies = require("./models").pineapplesmoothie;
const sequelize = require("../../src/db/models/index").sequelize;

module.exports = {
  retrievePineappleSmoothies(callback) {
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
