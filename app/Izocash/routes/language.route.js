const express = require("express");
const languageRouter = express.Router();
const { saveLanguage, allLanguage, updateInfos } = require("../controllers/language.controller");

languageRouter.post("/save", saveLanguage);
languageRouter.get("/", allLanguage);
languageRouter.put("/update/:id", updateInfos);

module.exports = languageRouter;
