const express = require("express");
const router = express.Router();
const yousmoothieController = require("../controllers/yousmoothieController.js");

router.get("/yousmoothie", yousmoothieController.index);

module.exports = router;
