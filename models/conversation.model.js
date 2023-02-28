const mongoose = require("mongoose");

const ConversationSchema = new mongoose.Schema(
  {
    idDestinataire: {
      type: String,
    },

    nomDestinataire: {
      type: String,
    },

    photoProfilDestinataire: {
      type: String,
    },

    badgeVerifiedDestinataire: {
      type: String,
    },

    dernierMessage: {
      type: String,
    },

    idInitieur: {
      type: String,
    },

    nomInitieur: {
      type: String,
    },

    photoProfilInitieur: {
      type: String,
    },

    badgeVerifiedInitieur: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Conversation", ConversationSchema);
