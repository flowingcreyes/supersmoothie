const ApplicationPolicy = require("./application");

module.exports = class SubjectPolicy extends ApplicationPolicy {
  new() {
    return this.user != null;
  }

  create() {
    return this.new();
  }
  show() {
    return true;
  }
  edit() {
    return this._isOwner() || this._isAdmin();
  }

  update() {
    return this.edit();
  }

  destroy() {
    return this.update();
  }
};
