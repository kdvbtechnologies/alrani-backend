require("dotenv").config({ path: "./config/.env" });
require("./config/db");

const express = require("express");
const app = express();
const userRoute = require("./routes/user.route");
const postRoute = require("./routes/post.route");
const commentRoute = require("./routes/comment.route");
const reponseRoute = require("./routes/reponse.route");
const abonnerRoute = require("./routes/abonner.route");
const vueRoute = require("./routes/vue.route");
const conversationRoute = require("./routes/conversation.route");
const notificationRoute = require("./routes/notification.route");
const messageRoute = require("./routes/message.route");
const onlineRoute = require("./routes/online.route");
const adminRoute = require("./routes/admin.route");

const cors = require("cors");
const corsOptions = {
  origin: "https://alrani.netlify.app",
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
app.use("/api/post", postRoute);
app.use("/api/comment", commentRoute);
app.use("/api/reponse", reponseRoute);
app.use("/api/abonner", abonnerRoute);
app.use("/api/vue", vueRoute);
app.use("/api/conversation", conversationRoute);
app.use("/api/notification", notificationRoute);
app.use("/api/message", messageRoute);
app.use("/api/online", onlineRoute);
app.use("/api/admin", adminRoute);

app.listen(5500, console.log("server 5500 is running"));
