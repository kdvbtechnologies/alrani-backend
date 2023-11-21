const express = require("express");
const {
  ajouterApp,
  allApp,
  //updatePost,
  //publierVideo,
} = require("../controllers/listeApp.controller");
const router = express.Router();

router.post("/ajouter", ajouterApp);
router.get("/", allApp);
//router.put("/update/:id", updatePost);
//router.post("/publierVideo", publierVideo);

module.exports = router;
