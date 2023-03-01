const mongoose = require("mongoose");

const OnlineSchema = new mongoose.Schema(
  {
    idAuteur: {
      type: String,
    },

    status: {
      type: String,
    },
	
	adresseIp: {
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
  },
  { timestamps: true }
);

module.exports = mongoose.model("Online", OnlineSchema);
