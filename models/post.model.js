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
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
