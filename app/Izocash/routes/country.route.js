const express = require("express");
const countryRouter = express.Router();
const { saveCountry, allCountry, updateInfos } = require("../controllers/country.controller");

countryRouter.post("/save", saveCountry);
countryRouter.get("/", allCountry);
countryRouter.put("/update/:id", updateInfos);

module.exports = countryRouter;
