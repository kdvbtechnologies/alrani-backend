const mongoose = require("mongoose");

const ConversationSchema = new mongoose.Schema(
  {
    // Sender - celui qui a envoyer le message
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

    // Receiver - celui qui a recu le message
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

    lastMessage: {
      type: String,
    },

    type: {
      type: String,
    },

  },
  { timestamps: true }
);

module.exports = mongoose.model("Alrani 1 - Conversations", ConversationSchema);
