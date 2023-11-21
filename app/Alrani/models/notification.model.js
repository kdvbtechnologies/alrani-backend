const mongoose = require("mongoose");

const NotificationSchema = new mongoose.Schema(
  {
    notification: {
      type: String,
    },

    // read=0, notification non lu
    // read=1, notification lu
    read: {
      type: String,
    },

    // Owner - celui qui envoie la notification
    idOwner: {
      type: String,
    },

    nameOwner: {
      type: String,
    },

    // Other - celui qui recoit la notification
	  idOther: {
      type: String,
    },
	
	  nameOther: {
      type: String,
    },
	  
	  idConversation: {
      type: String,
    },

    type: {
      type: String,
    },

  },
  { timestamps: true }
);

module.exports = mongoose.model("Alrani 1 - Notifications", NotificationSchema);
