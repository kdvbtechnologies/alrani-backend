const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
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
	
	  view: {
      type: String,
    },

    description: {
      type: String,
    },

    image1: {
      type: String,
    },
	
    image2: {
      type: String,
    },
	
    image3: {
      type: String,
    },

    video: {
      type: String,
    },
	
	  coverVideo: {
      type: String,
    },

    connection: {
      type: String,
    },
	
    type: {
      type: String,
    },
	
	  /*buttonActiver: {
      type: String,
    },
	
	  postStyle: {
      type: String,
    },
	
	  idAdmin: {
      type: String,
    },
	
	  nomAdmin: {
      type: String,
    },
	
	  roleAdmin: {
      type: String,
    },
	
	  postApprouver: {
      type: String,
    },

    visible: {
      type: String,
    },*/

  },
  { timestamps: true }
);

module.exports = mongoose.model("Alrani 1 - Posts", PostSchema);
