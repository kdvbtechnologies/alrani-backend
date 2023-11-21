const mongoose = require("mongoose");

const ReplySchema = new mongoose.Schema(
  {
    idOwner: {
      type: String,
    },

    nameOwner: {
      type: String,
    },

    photoOwner: {
      type: String,
    },

    badgeOwner: {
      type: String,
    },

    countryOwner: {
      type: String,
    },

    reply: {
      type: String,
    },

    idPost: {
      type: String,
    },

    idOwnerPost: {
      type: String,
    },
	
	  idComment: {
      type: String,
    },

    idOwnerComment: {
      type: String,
    },

    visible: {
      type: String,
    },

    type: {
      type: String,
    },
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("Alrani 1 - Replies", ReplySchema);
