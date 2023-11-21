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

    // myAccount
    /* il s'agit des comptes appartenant aux entreprises de la FBJC. on a mis la variable myAccount pour pouvoir 
    filtrer ces comptes et les gerer depuis le panneau de control et aussi pour coder des fonctionnaliter qui seront 
    reserver uniquement pour les comptes de nos entreprises */
    myAccount: {
      type: String,
    },

    type: {
      type: String,
    },

  },
  { timestamps: true }
);

module.exports = mongoose.model("Vixinol Store 1 - Accounts", AccountSchema);
