const mongoose = require("mongoose");

const VueSchema = new mongoose.Schema(
  {
    idDuPost: {
      type: String,
    },

    idDuProprietaireDuPost: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Vue", VueSchema);
