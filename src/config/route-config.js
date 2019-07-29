module.exports = {
  init(app) {
    const staticRoutes = require("../routes/static");
    const yousmoothie = require("../routes/yousmoothie");
    const smoothieshare = require("../routes/smoothieshare");
    app.use(staticRoutes);
    app.use(yousmoothie);
    app.use(smoothieshare);
  }
};
