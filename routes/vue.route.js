const express = require("express");
const { createVue, allVue } = require("../controllers/vue.controller");
const vueRouter = express.Router();

vueRouter.post("/create", createVue);
vueRouter.get("/", allVue);

module.exports = vueRouter;
