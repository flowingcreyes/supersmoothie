const strawberrySmoothies = require("./models").strawberrysmoothie;
const sequelize = require("../../src/db/models/index").sequelize;

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
