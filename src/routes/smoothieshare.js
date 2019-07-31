const express = require("express");
const router = express.Router();
const smoothieshareController = require("../controllers/smoothieshareController");
const validation = require("./validation");

router.get("/smoothieshare", smoothieshareController.index);
router.get("/smoothieshare/new", smoothieshareController.new);
router.post("/smoothieshare/create", validation.validateSubjects, smoothieshareController.create);
router.get("/smoothieshare/signup", smoothieshareController.signUp);
//router.post("/users", validation.validateUsers, smoothieshareController.createAccount);
router.get("/smoothieshare/signin", smoothieshareController.signInForm);
router.get("/smoothieshare/signout", smoothieshareController.signOut)
router.get("/smoothieshare/:id", smoothieshareController.show);
router.get("/smoothieshare/:id/edit", smoothieshareController.edit);
router.post("/smoothieshare/:id/update", validation.validateSubjects, smoothieshareController.update);
router.post("/smoothieshare/:id/destroy", smoothieshareController.destroy);
router.post("/users/signin", smoothieshareController.signIn);
module.exports = router;
