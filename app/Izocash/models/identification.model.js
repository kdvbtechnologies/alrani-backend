const mongoose = require("mongoose");

const IdentificationSchema = new mongoose.Schema(
  {
    // identification=1, numero virtuel deja identifier
    // identification=0, numero virtuel non identifier
	  identification: {
      type: String,
    },

    // les infos du client qui a fait son identification
    idAccount: {
      type: String,
    },

    name: {
      type: String,
    },

    virtualNumber: {
      type: String,
    },

    phoneNumber: {
      type: String,
    },

    occupation: {
      type: String,
    },

    sex: {
      type: String,
    },

    photo: {
      type: String,
    },

    // sa localisation 
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

    address: {
      type: String,
    },

    // les infos de l'agence
    idAgency: {
      type: String,
    },

    nameAgency: {
      type: String,
    },

    connection: {
      type: String,
    },

    // type=1, card qui contient les informations d'identification
    // type=2, photo d'identitées
    // type=3, c'est une personne
    // type=4, c'est une entreprise
    
    type: {
      type: String,
    },
	
  },
  { timestamps: true }
);

module.exports = mongoose.model("Izocash 1 - Identifications", IdentificationSchema);
