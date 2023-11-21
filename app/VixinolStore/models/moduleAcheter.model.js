const mongoose = require("mongoose");

const ModuleAcheterSchema = new mongoose.Schema(
  {
    idAuteur: {
      type: String,
    },

    nomAuteur: {
      type: String,
    },

    validiter: {
      type: String,
    },

    terminer: {
      type: String,
    },

    idApp: {
      type: String,
    },

    id: {
      type: String,
    },

    nom: {
      type: String,
    },

    url: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ModuleAcheter", ModuleAcheterSchema);
