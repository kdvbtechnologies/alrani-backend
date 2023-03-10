const mongoose = require("mongoose");

mongoose.set("strictQuery", true);

mongoose.connect(
  "mongodb+srv://" +
    process.env.DB_USERNAME_AND_PASSWORD +
    "@cluster1.cwdkc.mongodb.net/alrani",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },

  (err) => {
    if (!err) console.log("Connected to MongoDB");
    else console.log("Connexion failed" + err);
  }
);
