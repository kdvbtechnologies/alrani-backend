const mongoose = require("mongoose");

const ZoneSchema = new mongoose.Schema(
  {
    zone: {
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

    idQuarter: {
      type: String,
    },

    // idCollaborateur on a mis ca car ca pourrait etre un collaborateur qui va ajouter la zone
    idCollaborator: {
      type: String,
    },

    nameCollaborator: {
      type: String,
    },

    // idAgence on a mis ca car ca pourrait etre une agence qui va ajouter la zone
    idAgency: {
      type: String,
    },

    nameAgency: {
      type: String,
    },

    // ci la zone est masquer, ca sera 1
    // ci la zone n'est pas masquer, ca sera 0
    hide: {
      type: String,
    },
    
    type: {
      type: String,
    },
	
  },
  { timestamps: true }
);

module.exports = mongoose.model("Izocash 1 - Zones", ZoneSchema);
