const express = require("express");
const cityRouter = express.Router();
const { saveCity, allCity, updateInfos } = require("../controllers/city.controller");

cityRouter.post("/save", saveCity);
cityRouter.get("/", allCity);
cityRouter.put("/update/:id", updateInfos);

module.exports = cityRouter;
