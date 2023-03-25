const express = require("express");
const {
  createAdmin,
  allAdmin,
  deleteAdmin,
} = require("../controllers/admin.controller");
const adminRouter = express.Router();

adminRouter.post("/create", createAdmin);
adminRouter.get("/", allAdmin);
adminRouter.delete("/delete/:id", deleteAdmin);

module.exports = adminRouter;
