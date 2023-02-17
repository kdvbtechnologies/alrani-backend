const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    urlImagePost: {
      type: String,
    },

    idAuteur: {
      type: String,
    },

    nomAuteur: {
      type: String,
    },

    descriptionPost: {
      type: String,
    },

    visibleProfil: {
      type: String,
    },

    visibleProfilOthers: {
      type: String,
    },

    visibleAccueil: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
