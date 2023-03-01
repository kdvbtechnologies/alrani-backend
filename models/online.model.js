const mongoose = require("mongoose");

const OnlineSchema = new mongoose.Schema(
  {
    idAuteur: {
      type: String,
    },

    status: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Online", OnlineSchema);
