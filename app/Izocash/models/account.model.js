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

    codePin: {
      type: String,
    },

    // solde compte national, solde compte international
    // il s'agit du compte izocash national et du compte izocash international
    balanceNationalAccount: {
      type: String,
    },

    balanceInternationalAccount: {
      type: String,
    },

    // stock national, stock international
    // il s'agit du stock izocash national et du stock izocash international
    stockNational: {
      type: String,
    },

    stockInternational: {
      type: String,
    },

    // pourcentage commission pour les agences apres avoir vendu leur stock
    percentageCommission: {
      type: String,
    },

    // activate=1, licence mini activer
    // activate=2, licence+ activer
    // activate=3, licence++ activer
    // activate=0, licence non activer
    activate: {
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

    // type=1, compte personnel
    // type=2, compte agence
    type: {
      type: String,
    },

  },
  { timestamps: true }
);

module.exports = mongoose.model("Izocash 1 - Accounts", AccountSchema);
