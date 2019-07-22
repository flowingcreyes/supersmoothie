module.exports = {
  init(app) {
    const staticRoutes = require("../routes/static");
    const yousmoothie = require("../routes/yousmoothie");
    app.use(staticRoutes);
    app.use(yousmoothie);
  }
};
