const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema(
  {
    idDeLaPersonneQuiACommenter: {
      type: String,
    },

    nomDeLaPersonneQuiACommenter: {
      type: String,
    },

    paysDeLaPersonneQuiACommenter: {
      type: String,
    },

    photoProfil: {
      type: String,
    },

    badgeVerified: {
      type: String,
    },

    commentaire: {
      type: String,
    },

    reponseCommentaire: {
      type: String,
    },

    idPost: {
      type: String,
    },

    idDuProprietaireDuPost: {
      type: String,
    },

    visibleComment: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Comment", CommentSchema);
