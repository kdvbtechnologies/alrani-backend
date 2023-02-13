require("dotenv").config({ path: "./config/.env" });
require("./config/db");

const express = require("express");
const app = express();
const userRoute = require("./routes/user.route");

const cors = require("cors");
const corsOptions = {
  origin: "https://alrani.com",
  credentials: true,
  allowedHeaders: ["sessionId", "Content-Type"],
  exposedHeaders: ["sessionId"],
  methods: "GET, HEAD, PUT, PATCH, POST, DELETE",
  preflightContinue: false,
};
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// (inscription, connexion, oneUser, allUser , ca se passe dans cette route)
app.use("/api/user", userRoute);

app.listen(1000, console.log("server 1000 is running"));
