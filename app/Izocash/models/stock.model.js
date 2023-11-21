const mongoose = require("mongoose");

const StockSchema = new mongoose.Schema(
  {
    amount: {
      type: String,
    },

    valueAmount: {
      type: String,
      required: true,
    },

    idCollaborator: {
      type: String,
    },

    nameCollaborator: {
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

module.exports = mongoose.model("Izocash 1 - Stocks", StockSchema);
