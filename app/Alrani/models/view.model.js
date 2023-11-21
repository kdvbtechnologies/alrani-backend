const mongoose = require("mongoose");

const ViewSchema = new mongoose.Schema(
  {
    idPost: {
      type: String,
    },

    idOwnerPost: {
      type: String,
    },

    connection: {
      type: String,
    },

    type: {
      type: String,
    },
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("Alrani 1 - Views", ViewSchema);