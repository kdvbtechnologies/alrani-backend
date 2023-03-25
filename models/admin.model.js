const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema(
  {
    idAdmin: {
      type: String,
    },

    nomAdmin: {
      type: String,
    },

    roleAdmin: {
      type: String,
    },

    badgeVerified: {
      type: String,
    },

    idPage: {
      type: String,
    },

    nomPage: {
      type: String,
    },

    badgeVerifiedPage: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Admin", AdminSchema);