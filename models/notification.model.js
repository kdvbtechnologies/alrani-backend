const mongoose = require("mongoose");

const NotificationSchema = new mongoose.Schema(
  {
	idDestinataire: {
      type: String,
    },
	
	nomDestinataire: {
      type: String,
    },
	
    idDeLaPersonneQuiInforme: {
      type: String,
    },

    nomDeLaPersonneQuiInforme: {
      type: String,
    },
	
	photoProfilDeLaPersonneQuiInforme: {
      type: String,
    },
	
	badgeVerifiedDeLaPersonneQuiInforme: {
      type: String,
    },

    notification: {
      type: String,
    },
	
	lu: {
      type: String,
    },
	
	parle: {
      type: String,
    },
	
	idConversation: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Notification", NotificationSchema);
