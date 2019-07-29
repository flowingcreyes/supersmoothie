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
  },
  createSubject(newSubject, callback){
    return subjects.create({
      title: newSubject.title,
      description: newSubject.description
    }).then(subject => {
      callback(null, subject)
    })
    .catch(err => {
      callback(err);
    });
  },
  getOneSubject(id, callback){
    return subjects.findByPk(id)
    .then((subject) => {
      callback(null, subject);
    })
    .catch((err) => {
      callback(err);
    })
  }
}
