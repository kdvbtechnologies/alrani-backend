const mongoose = require("mongoose");

const VideoSchema = new mongoose.Schema(
  {
    video: {
      type: String,
    },

    coverVideo: {
      type: String,
    },

    verifyCoverVideo: {
      type: String,
    },

    title: {
      type: String,
    },

    duration: {
      type: String,
    },

    view: {
      type: String,
    },

    // view demo, pour la version de demonstration
    viewDemo: {
      type: String,
    },

    // infos du proprietaire de la video
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

    type: {
      type: String,
    },

  },
  { timestamps: true }
);

module.exports = mongoose.model("Veil Brillant 1 - Videos", VideoSchema);
