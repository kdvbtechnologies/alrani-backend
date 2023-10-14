const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    nomAuteur: {
      type: String,
      min: 3,
      max: 20,
      unique: true,
    },

    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
      minLength: 6,
      trim: true,
    },

    photoProfil: {
      type: String,
    },

    badgeVerified: {
      type: String,
    },

    utilisateur: {
      type: String,
    },

    ageAuteur: {
      type: String,
    },

    genreAuteur: {
      type: String,
    },

    paysAuteur: {
      type: String,
    },

    paragrapheHistoire: {
      type: String,
    },

    serviceOuOccupation: {
      type: String,
    },

    enLigne: {
      type: String,
    },

    buttonActiverSurLeProfil: {
      type: String,
    },

    visible: {
      type: String,
    },

    // moyen de paiement
    // moyen de paiement
    // moyen de paiement de son numero virtuel sur Alrani
    idPaymentMethod: {
      type: String,
    },

    namePaymentMethod: {
      type: String,
    },

    idUserPaymentMethod: {
      type: String,
    },

    nameUserPaymentMethod: {
      type: String,
    },
    // moyen de paiement

    // monetization - alrani monetization
    // monetization - alrani monetization
    balanceAlraniMonetization: {
      type: String,
    },

    balanceAlraniMonetizationDeals: {
      type: String,
    },

    balanceAlraniMonetizationFormation: {
      type: String,
    },
    // monetization - alrani monetization

    // Plus - alrani Plus
    // Plus - alrani Plus
    balanceAlraniPlus: {
      type: String,
    },

    balanceAlraniPlusDeals: {
      type: String,
    },

    balanceAlraniPlusFormation: {
      type: String,
    },
    // Plus - alrani Plus

    // Collaborator - alrani Collaborator
    // Collaborator - alrani Collaborator
    balanceAlraniCollaborator: {
      type: String,
    },

    balanceAlraniCollaboratorDeals: {
      type: String,
    },

    balanceAlraniCollaboratorFormation: {
      type: String,
    },
    // Collaborator - alrani Collaborator
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
