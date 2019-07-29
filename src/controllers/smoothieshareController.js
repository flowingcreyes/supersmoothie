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
},
create(req, res, next){
  let newSubject = {
    title: req.body.title,
    description: req.body.description
  };
  subjectQueries.createSubject(newSubject, (err, subject) => {
    if(err){
      res.redirect(500, "smoothieshare/new");
    } else{
      res.redirect(303, `/smoothieshare/${subject.id}`)
    }
  })
},
show(req, res, body){
  subjectQueries.getOneSubject(req.params.id, (err, subject) => {
    if(err || subject == null){
      res.redirect(404, "/")
    } else{
      res.render("smoothieshare/show", {subject})
    }
  })
}
}
