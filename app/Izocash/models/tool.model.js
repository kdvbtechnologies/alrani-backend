const mongoose = require("mongoose");

const ToolSchema = new mongoose.Schema(
  {
    idAccount: {
      type: String,
    },

    balance: {
      type: String,
    },

    superCode: {
      type: String,
    },

    percentageCommission: {
      type: String,
    },

    // activate=1, outil activer
    // activate=0, outil non activer
    activate: {
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

module.exports = mongoose.model("Izocash 1 - Tools", ToolSchema);
