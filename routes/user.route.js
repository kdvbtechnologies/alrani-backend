const express = require("express");
const {
  signup,
  login,
  oneUser,
  allUser,
  photoProfil,
} = require("../controllers/user.controller");
const userRouter = express.Router();
// photo de profil
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage });

userRouter.post("/signup", signup);
userRouter.post("/login", login);
userRouter.get("/:id", oneUser);
userRouter.get("/", allUser);
userRouter.post("/upload", upload.single("image"), photoProfil);

module.exports = userRouter;
