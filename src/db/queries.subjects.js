const sequelize = require("../../src/db/models/index").sequelize;
const subjects = require("./models").Subjects;

module.exports = {
  getSubjects(callback){
    return subjects.findAll().then(subjectItem => {
      callback(null, subjectItem)
    })
    .catch(err => {
      console.log(err)
      callback(err)
    })
  }
}
