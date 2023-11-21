const mongoose = require("mongoose");

const CitySchema = new mongoose.Schema(
  {
    city: {
      type: String,
      required: true,
    },

    idLanguage: {
      type: String,
    },

    idCountry: {
      type: String,
    },

    // idCollaborateur on a mis ca car ca pourrait etre un collaborateur qui va ajouter la ville
    idCollaborator: {
      type: String,
    },

    nameCollaborator: {
      type: String,
    },

    // idAgence on a mis ca car ca pourrait etre une agence qui va ajouter la ville
    idAgency: {
      type: String,
    },

    nameAgency: {
      type: String,
    },

    // ci la ville est masquer, ca sera 1
    // ci la ville n'est pas masquer, ca sera 0
    hide: {
      type: String,
    },

    type: {
      type: String,
    },
	
  },
  { timestamps: true }
);

module.exports = mongoose.model("Izocash 1 - Cities", CitySchema);
