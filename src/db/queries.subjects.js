const sequelize = require("../../src/db/models/index").sequelize;
const Subjects = require("./models").Subjects;
const Authorizer = require("../policies/subjects");
const Users = require("../db/models").Users;


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
      description: newSubject.description,
      userId: newSubject.userId
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
  deleteSubject(req, callback) {
    return Subjects.findByPk(req.params.id)

      .then(subject => {
        const authorized = new Authorizer(req.user, subject).destroy();
        if (authorized) {
          subject.destroy().then(res => {
            callback(null, subject);
          });
        } else {
          req.flash("notice", "You're not authorized to do that.");
          callback(401);
        }
      })
      .catch(err => {
        callback(err);
      });
  },
  updateSubject(req, updatedSubject, callback) {
    return Subjects.findByPk(req.params.id).then(subject => {
      if (!subject) {
        return callback("Subject not found!");
      }
      const authorized = new Authorizer(req.user, subject).update();
      if (authorized) {
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
      } else {
        req.flash("notice", "You're not authorized to do that.");
        callback("Forbidden.");
      }
    });
  }
};
