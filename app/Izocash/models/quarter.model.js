const mongoose = require("mongoose");

const QuarterSchema = new mongoose.Schema(
  {
    quarter: {
      type: String,
      required: true,
    },

    idLanguage: {
      type: String,
    },

    idCountry: {
      type: String,
    },

    idCity: {
      type: String,
    },

    // idCollaborateur on a mis ca car ca pourrait etre un collaborateur qui va ajouter le quartier
    idCollaborator: {
      type: String,
    },

    nomCollaborator: {
      type: String,
    },

    // idAgence on a mis ca car ca pourrait etre une agence qui va ajouter le quartier
    idAgency: {
      type: String,
    },

    nameAgency: {
      type: String,
    },

    // ci le quartier est masquer, ca sera 1
    // ci le quartier n'est pas masquer, ca sera 0
    hide: {
      type: String,
    },

    type: {
      type: String,
    },
	
  },
  { timestamps: true }
);

module.exports = mongoose.model("Izocash 1 - Quarters", QuarterSchema);
