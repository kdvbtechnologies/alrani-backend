const mongoose = require("mongoose");

const SuperModuleSchema = new mongoose.Schema(
  {
    url: {
      type: String,
    },

    nomSuperModule: {
      type: String,
    },

    desc: {
      type: String,
    },

    gratuit: {
      type: String,
    },

    idApp: {
      type: String,
    },

    nomApp: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("SuperModule", SuperModuleSchema);
