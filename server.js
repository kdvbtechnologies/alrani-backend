const express = require("express");
const app = express();
app.use(express.json());

app.get("/", function (req, res) {
  return res
    .status(200)
    .json({ message: "alrani backend est connecté avec success" });
});

app.listen(5000, console.log("listing on port 5000"));
