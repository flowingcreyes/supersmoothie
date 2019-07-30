const sequelize = require("../../src/db/models/index").sequelize;
const Subjects = require("./models").Subjects;

module.exports = {
  getSubjects(callback) {
    return Subjects.findAll()
      .then(subjectItem => {
        callback(null, subjectItem);
      })
      .catch(err => {
        callback(err);
      });
  },
  createSubject(newSubject, callback) {
    return Subjects.create({
      title: newSubject.title,
      description: newSubject.description
    })
      .then(subject => {
        callback(null, subject);
      })
      .catch(err => {
        callback(err);
      });
  },
  getOneSubject(id, callback) {
    return Subjects.findByPk(id)
      .then(subject => {
        callback(null, subject);
      })
      .catch(err => {
        callback(err);
      });
  },
  deleteSubject(id, callback) {
    return Subjects.destroy({
      where: { id }
    })
      .then(subject => {
        callback(null, subject);
      })
      .catch(err => {
        callback(err);
      });
  },
  updateSubject(id, updatedSubject, callback) {
    return Subjects.findByPk(id).then(subject => {
      if (!subject) {
        return callback("Subject not found!");
      }
      subject
        .update(updatedSubject, {
          fields: Object.keys(updatedSubject)
        })
        .then(() => {
          callback(null, subject);
        })
        .catch(err => {
          callback(err);
        });
    });
  }
};
