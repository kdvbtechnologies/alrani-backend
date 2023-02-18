const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    idAuteur: {
      type: String,
    },
	
	nomAuteur: {
      type: String,
    },
	
	photoProfil: {
      type: String,
    },
	
	badgeVerified: {
      type: String,
    },
	
	nbreDeVue: {
      type: String,
    },

    descriptionPost: {
      type: String,
    },

    urlImagePost: {
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
