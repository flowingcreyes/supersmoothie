module.exports = {
  index(req, res, next) {
    res.render("yousmoothie/index");
  },
  blueberry(req, res, next){
    res.render("yousmoothie/blueberry")
  },
  strawberry(req, res, next){
    res.render("yousmoothie/strawberry")
  },
  banana(req, res, next){
    res.render("yousmoothie/banana")
  }
};
