const mongoose = require("mongoose");

const CollaboratorSchema = new mongoose.Schema(
  {
    idCollaborator: {
      type: String,
    },

    nameCollaborator: {
      type: String,
    },

    badgeCollaborator: {
      type: String,
    },
	
	  postApprovedCollaborator: {
      type: String,
    },

    idPage: {
      type: String,
    },

    namePage: {
      type: String,
    },

    photoPage: {
      type: String,
    },

    badgePage: {
      type: String,
    },
	
	  occupationPage: {
      type: String,
    },

    type: {
      type: String,
    },
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("Alrani 1 - Collaborators", CollaboratorSchema);
