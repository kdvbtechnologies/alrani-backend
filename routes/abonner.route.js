const express = require("express");
const {
  createAbonner,
  allAbonner,
  deleteAbonner,
} = require("../controllers/abonner.controller");
const abonnerRouter = express.Router();

abonnerRouter.post("/create", createAbonner);
abonnerRouter.get("/", allAbonner);
abonnerRouter.delete("/delete/:id", deleteAbonner);

module.exports = abonnerRouter;
