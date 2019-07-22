const blueberrySmoothies = require("./models").blueberrysmoothie;
const sequelize = require("../../src/db/models/index").sequelize;

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
