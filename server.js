require("dotenv").config({ path: "./config/.env" });
require("./config/db");

const express = require("express");
const app = express();


// alrani
// alrani
const accountRouteAA = require("./app/Alrani/routes/account.route");
const userRouteAA = require("./app/Alrani/routes/user.route");
const postRouteAA = require("./app/Alrani/routes/post.route");
const commentRouteAA = require("./app/Alrani/routes/comment.route");
const replyRouteAA = require("./app/Alrani/routes/reply.route");
const subscribeRouteAA = require("./app/Alrani/routes/subscribe.route");
const viewRouteAA = require("./app/Alrani/routes/view.route");

const conversationRouteAA = require("./app/Alrani/routes/conversation.route");
const messageRouteAA = require("./app/Alrani/routes/message.route");

const notificationRouteAA = require("./app/Alrani/routes/notification.route");
const onlineRouteAA = require("./app/Alrani/routes/online.route");
const collaboratorRouteAA = require("./app/Alrani/routes/collaborator.route");
const toolRouteAA = require("./app/Alrani/routes/tool.route");


// izocash
// izocash
const accountRouteIA = require("./app/Izocash/routes/account.route");

const countryRouteIA = require("./app/Izocash/routes/country.route");
const cityRouteIA = require("./app/Izocash/routes/city.route");

const identificationRouteIA = require("./app/Izocash/routes/identification.route");
const languageRouteIA = require("./app/Izocash/routes/language.route");
const notificationRouteIA = require("./app/Izocash/routes/notification.route");
const quarterRouteIA = require("./app/Izocash/routes/quarter.route");
const stockRouteIA = require("./app/Izocash/routes/stock.route");
const toolRouteIA = require("./app/Izocash/routes/tool.route");
const userRouteIA = require("./app/Izocash/routes/user.route");
const virtualNumberRouteIA = require("./app/Izocash/routes/virtualNumber.route");
const zoneRouteIA = require("./app/Izocash/routes/zone.route");


// veil brillant
// veil brillant
const accountRouteVB = require("./app/VeilBrillant/routes/account.route");
const userRouteVB = require("./app/VeilBrillant/routes/user.route");
const videoRouteVB = require("./app/VeilBrillant/routes/video.route");


// vixinol store
// vixinol store
const accountRouteVS = require("./app/VixinolStore/routes/account.route");
const userRouteVS = require("./app/VixinolStore/routes/user.route");


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

// alrani
app.use("/api1/accountAA", accountRouteAA);
app.use("/api1/postAA", postRouteAA);
app.use("/api1/commentAA", commentRouteAA);
app.use("/api1/collaboratorAA", collaboratorRouteAA);
app.use("/api1/conversationAA", conversationRouteAA);
app.use("/api1/replyAA", replyRouteAA);
app.use("/api1/subscribeAA", subscribeRouteAA);
app.use("/api1/viewAA", viewRouteAA);
app.use("/api1/notificationAA", notificationRouteAA);
app.use("/api1/messageAA", messageRouteAA);
app.use("/api1/onlineAA", onlineRouteAA);
app.use("/api1/userAA", userRouteAA);
app.use("/api1/toolAA", toolRouteAA);


// izocash
app.use("/api1/accountIA", accountRouteIA); // account
app.use("/api1/userIA", userRouteIA);
app.use("/api1/identificationIA", identificationRouteIA); // identification - dans cette route on enregistre les informations d'identification du client
app.use("/api1/languageIA", languageRouteIA); // localisation - C'est dans ces routes qu'on enregistre la localisation
app.use("/api1/countryIA", countryRouteIA);
app.use("/api1/cityIA", cityRouteIA);
app.use("/api1/quarterIA", quarterRouteIA);
app.use("/api1/zoneIA", zoneRouteIA);
app.use("/api1/virtualNumberIA", virtualNumberRouteIA); // numero virtuel - C'est dans cette route qu'on enregistre le numero virtuel qui q ete delivrer
app.use("/api1/stockIA", stockRouteIA); // stock a offir (stock gratuit) - cette route c'est pour les stock qu'on va offrir aux nouvelles agences
app.use("/api1/notificationIA", notificationRouteIA); // notification (historique)
app.use("/api1/toolIA", toolRouteIA); // outil - C'est dans cette route qu'on active les outils


// veil brillant
app.use("/api1/accountVB", accountRouteVB);
app.use("/api1/userVB", userRouteVB);
app.use("/api1/videoVB", videoRouteVB);


// vixinol store
app.use("/api1/accountVS", accountRouteVS);
app.use("/api1/userVS", userRouteVS);


app.listen(5500, console.log("server 5500 is running"));

//npm uninstall jsonwebtoken