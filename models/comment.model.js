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

    visibleComment: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Comment", CommentSchema);
