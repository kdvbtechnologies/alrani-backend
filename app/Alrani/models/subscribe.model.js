const mongoose = require("mongoose");

const SubscribeSchema = new mongoose.Schema(
  {
    // Sender - celui qui s'abonne
    idSender: {
      type: String,
    },

    nameSender: {
      type: String,
    },

    photoSender: {
      type: String,
    },
	
	  badgeSender: {
      type: String,
    },

    countrySender: {
      type: String,
    },

    // Receiver - celui qui recoit l'abonnement
    idReceiver: {
      type: String,
    },

    nameReceiver: {
      type: String,
    },
    
    photoReceiver: {
      type: String,
    },
	
	  badgeReceiver: {
      type: String,
    },

    countryReceiver: {
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

module.exports = mongoose.model("Alrani 1 - Subscribers", SubscribeSchema);
