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
	
	urlImage1: {
      type: String,
    },
	
	urlImage2: {
      type: String,
    },
	
	urlImage3: {
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
	
	buttonActiver: {
      type: String,
    },
	
	postStyle: {
      type: String,
    },
	
	idAdmin: {
      type: String,
    },
	
	nomAdmin: {
      type: String,
    },
	
	roleAdmin: {
      type: String,
    },
	
	postApprouver: {
      type: String,
    },
	
	urlVideo: {
      type: String,
    },
	
	photoCouvertureVideo: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
