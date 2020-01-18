const strawberrySmoothies = require("./models").strawberrySmoothie;
const sequelize = require("../../src/db/models/index").sequelize;

module.exports = {
  retrievestrawberrySmoothies(callback) {
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
