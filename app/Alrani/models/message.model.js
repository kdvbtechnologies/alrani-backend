const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema(
  {
    idConversation: {
      type: String,
    },

    message: {
      type: String,
    },

    idOwner: {
      type: String,
    },
	
	  image: {
      type: String,
    },
	
	  video: {
      type: String,
    },

    type: {
      type: String,
    },

  },
  { timestamps: true }
);

module.exports = mongoose.model("Alrani 1 - Messages", MessageSchema);
