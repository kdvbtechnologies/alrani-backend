const express = require("express");
const accountRouter = express.Router();
const { createAccount, allAccount, updateInfos, sendPhoto, sendVideo } = require("../controllers/account.controller");

// envoyer photo
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage });

accountRouter.post("/create", createAccount);
accountRouter.get("/", allAccount);
accountRouter.put("/update/:id", updateInfos);
accountRouter.post("/sendPhoto", upload.single("image"), sendPhoto);
accountRouter.post("/sendVideo", sendVideo);

module.exports = accountRouter;