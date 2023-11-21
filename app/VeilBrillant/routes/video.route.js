const express = require("express");
const videoRouter = express.Router();
const { newVideo, allVideo, updateInfos } = require("../controllers/video.controller");

videoRouter.post("/new", newVideo);
videoRouter.get("/", allVideo);
videoRouter.put("/update/:id", updateInfos);

module.exports = videoRouter;
