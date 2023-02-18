const mongoose = require("mongoose");

const ReponseSchema = new mongoose.Schema(
  {
    idDeLaPersonneQuiAReponduAuCommentaire: {
      type: String,
    },

    nomDeLaPersonneQuiAReponduAuCommentaire: {
      type: String,
    },

    paysDeLaPersonneQuiAReponduAuCommentaire: {
      type: String,
    },

    photoProfil: {
      type: String,
    },

    badgeVerified: {
      type: String,
    },

    reponse: {
      type: String,
    },

    idPost: {
      type: String,
    },

    idDuProprietaireDuPost: {
      type: String,
    },

    idDuProprietaireDuCommentaire: {
      type: String,
    },

    visibleReponse: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Reponse", ReponseSchema);
