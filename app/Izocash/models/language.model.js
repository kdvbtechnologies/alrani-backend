const mongoose = require("mongoose");

const LanguageSchema = new mongoose.Schema(
  {
    language: {
      type: String,
      required: true,
    },

    // idCollaborateur on a mis ca car ca pourrait etre un collaborateur qui va ajouter la langue
    idCollaborator: {
      type: String,
    },

    nameCollaborator: {
      type: String,
    },

    // idAgence on a mis ca car ca pourrait etre une agence qui va ajouter la langue
    idAgency: {
      type: String,
    },

    nameAgency: {
      type: String,
    },

    // si la langue est masquer, ca sera 1
    // si la langue n'est pas masquer, ca sera 0
    hide: {
      type: String,
    },

    connection: {
      type: String,
    },

    type: {
      type: String,
    },
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("Izocash 1 - Languages", LanguageSchema);
