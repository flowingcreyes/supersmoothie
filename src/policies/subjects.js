const ApplicationPolicy = require("./application");

module.exports = class SubjectPolicy extends ApplicationPolicy {
  new() {
    return this.user;
  }
  create() {
    return this.new();
  }
  edit() {
    return this.record;
  }
  update() {
    return this.edit();
  }
  destroy() {
    return this.update();
  }
};
