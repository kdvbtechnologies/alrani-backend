const express = require("express");
const {
  recuModuleAcheter,
  allRecuModuleAcheter,
} = require("../controllers/moduleAcheter.controller");
const router = express.Router();

router.post("/recu", recuModuleAcheter);
router.get("/", allRecuModuleAcheter);

module.exports = router;
