const express = require("express");
const {
  signup,
  login,
  oneUser,
  allUser,
} = require("../controllers/user.controller");
const userRouter = express.Router();

userRouter.post("/signup", signup);
userRouter.post("/login", login);
userRouter.get("/:id", oneUser);
userRouter.get("/", allUser);

module.exports = userRouter;
