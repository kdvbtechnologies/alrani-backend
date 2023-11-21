const express = require("express");
const {
  createSuperModule,
  allSuperModule,
} = require("../controllers/superModule.controller");
const router = express.Router();

router.post("/create", createSuperModule);
router.get("/", allSuperModule);

module.exports = router;
