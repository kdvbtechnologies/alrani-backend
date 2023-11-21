const mongoose = require("mongoose");

const ModuleSchema = new mongoose.Schema(
  {
    url: {
      type: String,
    },

    nomModule: {
      type: String,
    },

    miniDesc: {
      type: String,
    },

    desc: {
      type: String,
    },

    descAnnuel: {
      type: String,
    },

    idApp: {
      type: String,
    },

    idSuperModule: {
      type: String,
    },

    nomSuperModule: {
      type: String,
    },

    prix: {
      type: String,
    },

    prixAnnuel: {
      type: String,
    },

    valeurPrix: {
      type: String,
    },

    valeurPrixAnnuel: {
      type: String,
    },

    monnaieFCFA: {
      type: String,
    },

    type: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Module", ModuleSchema);
