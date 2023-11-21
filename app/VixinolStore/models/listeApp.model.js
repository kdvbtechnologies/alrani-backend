const mongoose = require("mongoose");

const ListeAppSchema = new mongoose.Schema(
  {
    nomApp: {
      type: String,
    },

    logo: {
      type: String,
    },

    desc: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ListeApp", ListeAppSchema);
