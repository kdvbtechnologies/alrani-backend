const mongoose = require("mongoose");

const AbonnerSchema = new mongoose.Schema(
  {
    idDeLabonne: {
      type: String,
    },

    nomDeLabonne: {
      type: String,
    },

    paysDeLabonne: {
      type: String,
    },

    photoProfilAbonne: {
      type: String,
    },
	
	badgeVerifiedAbonne: {
      type: String,
    },

    idDuBeneficiaire: {
      type: String,
    },

    nomDuBeneficiaire: {
      type: String,
    },

    paysDuBeneficiaire: {
      type: String,
    },

    photoProfilBeneficiaire: {
      type: String,
    },
	
	badgeVerifiedBeneficiaire: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Abonner", AbonnerSchema);
