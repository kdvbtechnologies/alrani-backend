const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema(
  {
    idConversation: {
      type: String,
    },

    message: {
      type: String,
    },

    idAuteurMessage: {
      type: String,
    },
	
	imageMessage: {
      type: String,
    },

    dateDenvoi: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Message", MessageSchema);
