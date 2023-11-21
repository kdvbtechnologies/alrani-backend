const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    nameUser: {
      type: String,
      required: true,
    },
    
    virtualNumber: {
      type: String,
      required: true,
    },

    password: {
      type: String,
      required: true,
      trim: true,
    },

    connection: {
      type: String,
    },

  },
  { timestamps: true }
);

module.exports = mongoose.model("Alrani 1 - Users", UserSchema);
