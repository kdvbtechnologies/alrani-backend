const mongoose = require("mongoose");

const VirtualNumberSchema = new mongoose.Schema(
  {
    virtualNumber: {
      required: true,
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
    },

    paymentMethod: {
      type: String,
    },

    countryCode: {
      type: String,
    },

    nameOwner: {
      type: String,
    },

    country: {
      type: String,
    },

    city: {
      type: String,
    },

    quarter: {
      type: String,
    },

    zone: {
      type: String,
    },

    busStop: {
      type: String,
    },

    // on enregistre les infos du Collaborateur dans le cas ou il s'agit d'un numero offert
    idCollaborator: {
      type: String,
    },

    nameCollaborator: {
      type: String,
    },

    // on enregistre les infos de l'agence dans le cas ou il s'agit d'un numero acheter
    idAgency: {
      type: String,
    },

    nameAgency: {
      type: String,
    },

    type: {
      type: String,
    },

  },
  { timestamps: true }
);

module.exports = mongoose.model("Izocash 1 - Virtual Numbers", VirtualNumberSchema);
