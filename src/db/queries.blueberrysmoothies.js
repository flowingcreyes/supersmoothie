const blueberrySmoothies = require("./models").blueberrySmoothie;
const sequelize = require("../../src/db/models/index").sequelize;

module.exports = {
  retrieveblueberrySmoothies(callback) {
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
