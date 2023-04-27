const mongoose = require("mongoose");

const NotificationSchema = new mongoose.Schema(
  {
	idDestinataireNotification: {
      type: String,
    },
	
	nomDestinataireNotification: {
      type: String,
    },
	
    idAuteurNotification: {
      type: String,
    },

    nomAuteurNotification: {
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
