const mongoose = require("mongoose");

const AccountSchema = new mongoose.Schema(
  {
    idUser: {
      type: String,
    },

    nameAccount: {
      type: String,
    },
    
    virtualNumber: {
      type: String,
    },

    paymentMethod: {
      type: String,
    },

    countryCode: {
      type: String,
    },

    photoProfile: {
      type: String,
    },

    badge: {
      type: String,
    },

    // myAccount
    /* il s'agit des comptes appartenant aux entreprises de la FBJC. on a mis la variable myAccount pour pouvoir 
    filtrer ces comptes et les gerer depuis le panneau de control et aussi pour coder des fonctionnaliter qui seront 
    reserver uniquement pour les comptes de nos entreprises */
    myAccount: {
      type: String,
    },

    connection: {
      type: String,
    },

    type: {
      type: String,
    },

    /*utilisateur: {
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

    // Plus - alrani Plus
    // Plus - alrani Plus
    balancePlusDeals: {
      type: String,
    },

    balancePlusFormation: {
      type: String,
    },
    // Plus - alrani Plus

    // monetization - alrani monetization
    // monetization - alrani monetization
    balanceMonetization: {
      type: String,
    },

    balanceMonetizationDeals: {
      type: String,
    },

    balanceMonetizationFormation: {
      type: String,
    },
    // monetization - alrani monetization

    // Collaborator - alrani Collaborator
    // Collaborator - alrani Collaborator
    balanceCollaborator: {
      type: String,
    },

    balanceCollaboratorDeals: {
      type: String,
    },

    balanceCollaboratorFormation: {
      type: String,
    },*/
    // Collaborator - alrani Collaborator
  },
  { timestamps: true }
);

module.exports = mongoose.model("Alrani 1 - Accounts", AccountSchema);
