const express = require("express");
const router = express.Router();
const yousmoothieController = require("../controllers/yousmoothieController.js");

router.get("/yousmoothie", yousmoothieController.index);
router.get("/yousmoothie/blueberry", yousmoothieController.blueberry);
router.get("/yousmoothie/banana", yousmoothieController.banana);
router.get("/yousmoothie/strawberry", yousmoothieController.strawberry);
router.get("/yousmoothie/pineapple", yousmoothieController.pineapple);
router.post("/yousmoothie/smoothieemail", yousmoothieController.email);

module.exports = router;
