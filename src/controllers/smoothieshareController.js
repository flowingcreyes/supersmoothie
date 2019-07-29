const subjectQueries = require("../db/queries.subjects.js");

module.exports = {
  index(req, res, next){
    subjectQueries.getSubjects((err, subjectItem) => {
      if(err){
        res.redirect(500, "/");
      } else{
        res.render("smoothieshare/index", {subjectItem});
      }
    }
  )
},
new(req, res, next){
  res.render("smoothieshare/new")
}
}
