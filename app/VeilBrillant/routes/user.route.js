const express = require("express");
const userRouter = express.Router();
const { signup, login, allUser } = require("../controllers/user.controller");

userRouter.post("/signup", signup);
userRouter.post("/login", login);
userRouter.get("/", allUser);

module.exports = userRouter;