// #1
const ApplicationPolicy = require("./application");

module.exports = class SubjectPolicy extends ApplicationPolicy {
  // #2
  new() {
    return this.user != null;
  }

  create() {
    return this.new();
  }
  show() {
    return true;
  }
  // #3
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
