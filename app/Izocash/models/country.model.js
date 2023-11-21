const mongoose = require("mongoose");

const CountrySchema = new mongoose.Schema(
  {
    country: {
      type: String,
      required: true,
    },

    idLanguage: {
      type: String,
    },

    // idCollaborateur on a mis ca car ca pourrait etre un collaborateur qui va ajouter le pays
    idCollaborator: {
      type: String,
    },

    nameCollaborator: {
      type: String,
    },

    // idAgence on a mis ca car ca pourrait etre une agence qui va ajouter le pays
    idAgency: {
      type: String,
    },

    nameAgency: {
      type: String,
    },

    // ci le pays est masquer, ca sera 1
    // ci le pays n'est pas masquer, ca sera 0
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

module.exports = mongoose.model("Izocash 1 - Countries", CountrySchema);
