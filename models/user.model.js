const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    nomAuteur: {
      type: String,
      min: 3,
      max: 20,
      unique: true,
    },

    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
      minLength: 6,
      trim: true,
    },

    photoProfil: {
      type: String,
    },

    badgeVerified: {
      type: String,
    },

    utilisateur: {
      type: String,
    },
	
	ageAuteur: {
      type: String,
    },
	
	genreAuteur: {
      type: String,
    },

    paysAuteur: {
      type: String,
    },
	
	paragrapheHistoire: {
      type: String,
    },

	serviceOuOccupation: {
      type: String,
    },
	
    enLigne: {
      type: String,
    },
	
	buttonActiverSurLeProfil: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
