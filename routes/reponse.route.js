const express = require("express");
const {
  createReponse,
  allReponse,
  updateReponse,
} = require("../controllers/reponse.controller");
const reponseRouter = express.Router();

reponseRouter.post("/create", createReponse);
reponseRouter.get("/", allReponse);
reponseRouter.put("/update/:id", updateReponse);

module.exports = reponseRouter;
