const express = require("express");
const router = express.Router();
const smoothieshareController = require("../controllers/smoothieshareController");

router.get("/smoothieshare", smoothieshareController.index);
router.get("/smoothieshare/new", smoothieshareController.new);
router.post("/smoothieshare/create", smoothieshareController.create);
router.get("/smoothieshare/signup", smoothieshareController.signUp);
router.post("/users", smoothieshareController.createAccount);
router.get("/smoothieshare/:id", smoothieshareController.show);
router.get("/smoothieshare/:id/edit", smoothieshareController.edit);
router.post("/smoothieshare/:id/update", smoothieshareController.update);
router.post("/smoothieshare/:id/destroy", smoothieshareController.destroy);

module.exports = router;
