const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema(
  {
    comment: {
      type: String,
    },

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

    idPost: {
      type: String,
    },

    idOwnerPost: {
      type: String,
    },

    verifyReply: {
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

module.exports = mongoose.model("Alrani 1 - Comments", CommentSchema);
