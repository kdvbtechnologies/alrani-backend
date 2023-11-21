const mongoose = require("mongoose");

const OnlineSchema = new mongoose.Schema(
  {
    idAccount: {
      type: String,
    },
	
    nameAccount: {
      type: String,
    },

    status: {
      type: String,
    },
	
	  addressIp: {
      type: String,
    },
	
	  countryIp: {
      type: String,
    },
	
	  cityIp: {
      type: String,
    },
	
	  page: {
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

module.exports = mongoose.model("Alrani 1 - Online", OnlineSchema);
