module.exports = {
  init(app) {
    const staticRoutes = require("../routes/static");
    const yousmoothie = require("../routes/yousmoothie");
    const smoothieshare = require("../routes/smoothieshare");
    if (process.env.NODE_ENV === "test") {
      const mockAuth = require("../../spec/support/mock-auth.js");
      mockAuth.fakeIt(app);
    }
    app.use(staticRoutes);
    app.use(yousmoothie);
    app.use(smoothieshare);
  }
};
