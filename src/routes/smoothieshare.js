const express = require("express");
const router = express.Router();
const smoothieshareController = require("../controllers/smoothieshareController")

router.get("/smoothieshare", smoothieshareController.index);
router.get("/smoothieshare/new", smoothieshareController.new);
router.post("/smoothieshare/create", smoothieshareController.create);
router.get("/smoothieshare/:id", smoothieshareController.show)
module.exports = router;
